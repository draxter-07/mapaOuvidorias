import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

var material = new THREE.MeshBasicMaterial( { color: 0xaaaaaa } );
var geometry = new THREE.SphereGeometry( 1, 32, 16 );
var sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

var geometry = new THREE.TorusGeometry( 0.9, 0.1, 50, 100 );
var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
var torus = new THREE.Mesh( geometry, material );
torus.rotation.x = Math.PI/2;

scene.add( torus );   
scene.add( sphere );
camera.position.z = 3;
function animate() {
	sphere.rotation.x += 0.000;
	sphere.rotation.y += 0.001;
	renderer.render( scene, camera );
}