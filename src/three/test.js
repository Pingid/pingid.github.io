import * as THREE from 'three';

const font_loader = pic => new Promise((resolve, reject) => new THREE.FontLoader().load(pic, resolve, null, reject))
const texture_loader = pic => new Promise((resolve, reject) => new THREE.TextureLoader().load(pic, resolve, null, reject))

font_loader('../static/fonts/Inconsolata-Regular.ttf')
	.then(font => console.log(font))
	.catch(console.log)

const TextPic = (scene, { text, pic }) => {
	return texture_loader(pic)
		.then(texture => {
			console.log(texture)
			const { width, height } = texture.image;
		  var geometry = new THREE.PlaneGeometry(4, 4 * height / width, 1);
		  var material = new THREE.MeshBasicMaterial({map: texture, overdraw: 0.5});
		  var plane = new THREE.Mesh(geometry, material);
		  plane.material.side = THREE.DoubleSide;
		  scene.add(plane);
		  plane.on('click', () => console.log('click'))
		})
}


export default ({ scene, camera, renderer }) => {
  const p_geometry = new THREE.PlaneGeometry( 4, 4, 32 );
  var p_texture = new THREE.TextureLoader().load( '../static/skynet/_56B6011.JPG' );
	var p_material = new THREE.MeshBasicMaterial( { map: p_texture } );
	const p_plane = new THREE.Mesh( p_geometry, p_material );

	const elem = TextPic(scene, { 
		pic: require('../static/skynet/_56B6143.JPG'), 
		text: 'Some test stuff' 
	});

  camera.position.z = 5;

  return () => {
  }
}
