import cheerio from 'cheerio';
import R from 'ramda';

export default (structure = { title: '', date: Date.now(), sections: [] }, html) => {
  const $ = cheerio.load(html);
  const title = $('h1').text();
  const domElements = R.drop(3, $('#contents')
    .children()
    .map(function(i, el) {
      return {
        text: $(this).text(),
        isTitle: $(this).attr('id') ? true : false,
        image: $(this).find('img').attr('src'),
      };
    })
    .toArray())

  const appendParagraph = (shape, item) => {
    const lensPath = R.lensPath(['sections', shape.sections.length - 1, 'paragraphs']);
    return R.over(lensPath, R.append({ text: item.text }), shape);
  }
  const appendSection = (shape, item) => {
    const lensPath = R.lensPath(['sections']);
    const paragraphs = item.text && !item.isTitle ? [ { text: item.text } ] : [];
    return R.over(lensPath, R.append({
      title: item.isTitle ? item.text : '',
      image: { src: item.image || null, textWrap: true } ,
      paragraphs
    }), shape);
  }
  const reduceDomElements = domElems => domElems.reduce((a, b, i) => {
    // If references key excists in object then push any text into the array
    if (a.references && b.text.length > 0 && !b.isTitle) return R.merge(a, { references: R.append({ text: b.text }, a.references) });
    // If the line is the beggining of the references add references key
    if (R.toLower(b.text) === 'references' || R.toLower(b.text) === 'bibliography') return R.merge(a, { references: [] });
    // If no sections excist or two spaces apear after each other make new section
    if (b.isTitle || b.image || !a.sections[0] || (b.text === '' && domElements[i-1].text === '')) return appendSection(a, b)
    // If there is block of text push to paragaphs array of the latest section
    if (b.text.length > 0) return appendParagraph(a, b)
    return a;
  }, R.merge(structure, { title }));
  const cleanStructure = struct => {
    const cleanSections = R.over(R.lensPath(['sections']), R.filter(x => x.paragraphs.length > 0 || x.title.length > 0))
    const cleanReferences = R.over(R.lensPath(['references']), R.filter(x => x.text.length > 0))
    return R.compose(cleanReferences, cleanSections)(struct);
  }
  return R.compose(cleanStructure, reduceDomElements)(domElements);
}
