const path = require('path');
const fs = require('fs');
const R = require('ramda');

// Static paths
const input = path.join(__dirname, '../build/index.html');
const output = path.join(__dirname, '../index.html');

// Wraps callback functions in promise
const promisifyFS = func =>  (...args) =>
	new Promise((resolve, reject) => 
		func(...args, (err, results) => err ? reject(err) : resolve(results))
)

// Wrap node fs function in promise
const read_dir = promisifyFS(fs.readdir);
const read_file = promisifyFS(fs.readFile);
const write_file = promisifyFS(fs.writeFile);

const changePaths = html => html
	.replace(/(?<=href="(?!https)|src=")/gi, '/build')

read_file(input, 'utf8')
	.then(i => { console.log(i); return i })
	.then(changePaths)
	.then(i => { console.log(i); return i })
	.then(html => write_file(output, html))
	.then(x => console.log("DONE"))

