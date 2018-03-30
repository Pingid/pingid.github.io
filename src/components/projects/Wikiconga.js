import React from 'react';
import makeTick from '../../utils/makeTick';

export const Thumb = makeTick(({ tick }) => {
	const poem = [
		{ text: 'Mathematics is the study of such topics as quantity.' },
		{ text: 'Quantity is a property that can exist as a multitude.' },
		{ text: 'Counting is the action of finding the number of elements.' },
		{ text: 'In mathematics.' }
	]
	const totalChars = poem.map(x => x.text.length).reduce((a, b) => a + b, 0);
	const place = tick % (totalChars + 100);
	const getUpUntil = () => {
		return poem.reduce((a, b) => {
			const totalChars = a.reduce((a, b) => a + b.length, 0);
			if (totalChars >= place) return a;
			if ((totalChars + b.text.length) < place) return [].concat(a, [b.text])
			return [].concat(a, [b.text.slice(0, place - totalChars)])
		}, [])
	}
	return (
		<div>
			<div style={{ fontSize: '.8rem', userSelect: 'none', opacity: 0, height: 0, }}>Counting is the action of finding the number of elements.</div>
			<p style={{ fontSize: '.8rem' }}>
				{
					getUpUntil().map((line, i) => <span key={i}>{line}<br /></span>)
				}
			</p>
	  </div>
	)
}, 50)
