const fs = require('fs');
const cheerio = require('cheerio');
const rp = require('request-promise');
const R = require('ramda');

const docLinks = require('./docLinks');

const populateStructure = (title, date, domElements) => {
  const structure = { title, date, sections: [] };
  const appendParagraph = (shape, item) => {
    // console.log(item);
    const lensPath = R.lensPath(['sections', shape.sections.length - 1, 'paragraphs']);
    // console.log('fdsafsad', R.view(lensPath, R.over(lensPath, R.append({ text: item.text }), shape)));
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
    // console.log('A', JSON.stringify(a, null, 2));
    // console.log('B', JSON.stringify(b, null, 2));
    // console.log('\n');
    // If b contains nothing do nothing
    // If references key excists in object then push any text into the array
    if (a.references && b.text.length > 0 && !b.isTitle) return R.merge(a, { references: R.append({ text: b.text }, a.references) });
    // If the line is the beggining of the references add references key
    if (R.toLower(b.text) === 'references' || R.toLower(b.text) === 'bibliography') return R.merge(a, { references: [] });
    // If no sections excist or two spaces apear after each other make new section
    if (b.isTitle || b.image || !a.sections[0] || (b.text === '' && domElements[i-1].text === '')) return appendSection(a, b)
    // If there is block of text push to paragaphs array of the latest section
    if (b.text.length > 0) return appendParagraph(a, b)
    return a;
  }, structure);
  const cleanStructure = structure => {
    const cleanSections = R.over(R.lensPath(['sections']), R.filter(x => x.paragraphs.length > 0 || x.title.length > 0))
    const cleanReferences = R.over(R.lensPath(['references']), R.filter(x => x.text.length > 0))
    return R.compose(cleanReferences, cleanSections)(structure);
  }
  return R.compose(cleanStructure, reduceDomElements)(domElements);
}

const blogPosts = docLinks.map(docLink =>
  rp(docLink.src)
  .then(html => cheerio.load(html))
  .then($ => {
    const title = $('h1').text();
    const arrayOfElements = R.drop(3, $('#contents')
      .children()
      .map(function(i, el) {
        return {
          text: $(this).text(),
          isTitle: $(this).attr('id') ? true : false,
          image: $(this).find('img').attr('src'),
        };
      })
      .toArray()
    );
    return populateStructure(title, docLink.date, arrayOfElements);
  })
  .then(structure => {
    return structure
  })
)

Promise.all(blogPosts)
  .then(posts => {
    const sortedPosts = posts.sort((a, b) => a.date < b.date)
    const blogPosts = `module.exports = ${JSON.stringify(sortedPosts, null, 2)}`;
    fs.writeFile('./content/posts.js', blogPosts, function(err) {
        if(err) return console.log(err);
        console.log("The file was saved!");
    });
    // console.log(JSON.stringify(structure, null, 2))
  })
// setTimeout(() => console.log(blogPosts[0]), 2000);
