const path = require('path');
const fs = require('fs');
const R = require('ramda');
const moment = require('moment');

// Static paths
const folder = path.join(__dirname, '../content');
const static = path.join(__dirname, '../src/static');
const outFile = path.join(__dirname, '../src/content.json');

// Wraps callback functions in promise
const promisifyFS = func =>  (...args) =>
	new Promise((resolve, reject) => 
		func(...args, (err, results) => err ? reject(err) : resolve(results))
)

// Wrap node fs function in promise
const read_dir = promisifyFS(fs.readdir);
const read_file = promisifyFS(fs.readFile);
const write_file = promisifyFS(fs.writeFile);
const copy_file = promisifyFS(fs.copyFile);
const mk_dir = promisifyFS(fs.mkdir);
const exists = dir => new Promise((res, rej) => fs.exists(dir, itDoes => itDoes ? res(itDoes) : rej(itDoes))) 

// Extract title of article
const addTitle = (text, obj) => R.assoc('title', text.match(/(?<=#\s)(.*?)\n/)[0].trim().toLowerCase(), obj);
// Extract data from json code block in markdown
const addMeta = (text, obj) =>  {
	const jsonBlock = /(?<=```json)([\s\S]*?)(?=```)/gi.exec(text);
	if (jsonBlock) return R.assoc('meta', JSON.parse(jsonBlock[0]), obj);
	return obj;
}

// Move and replace resources
const addMarkdown = (text, obj) => {
	const fileReg = /(?<=]\()(.*\.(gif|JPG|gif|jpg|png|jpeg))(?=\))/gi;
	let paths = [];

	const replaced = text
		.replace(/```json([\s\S]*?)```/, '') // remove JSON block
		.replace(/#.*\n/, '') // remove title
		.replace(fileReg, (file, all) => { 
			const staticPath = path.join(static, obj.title, path.basename(file));
			paths = paths.concat({ from: file, to: staticPath });
			return path.relative(path.join(__dirname, '../src'), staticPath);
		})

	return exists(path.join(static, obj.title))
		.catch(err => mk_dir(path.join(static, obj.title)))
		.then(Promise.all(paths.map((p, index) => copy_file(p.from, p.to) )))
		.then(() => R.assoc('markdown', replaced, obj))
}

// Extract info from markdown file
const parsePost = post => Promise.resolve({})
	.then(obj => addTitle(post, obj))
	.then(obj => addMeta(post, obj))
	.then(obj => addMarkdown(post, obj))
	.catch(err => console.log('There was a problem parsing post', post.slice(0, 50), err))

// Read all files in folder parse them then write to posts.json file
read_dir(folder)
	.then(R.filter(path => /\.md/.test(path)))
	.then(paths => 
		Promise.all(paths.map(file => 
			read_file(path.join(folder, file), 'utf8'))))
	.then(posts => Promise.all(posts.map(parsePost)))
	.then(posts => posts.reduce((a, b) => R.assoc(b.title, b, a), {}))
	.then(x => write_file(outFile, JSON.stringify(x, null, 2), 'utf8'))
	.catch(x => console.log('ERROR', x))