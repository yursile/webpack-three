import THREE from "three.js"

import OrbitControls from "./libs/OrbitControls.js"

import img from "../img/A01.jpg"

var camera;

var scene, renderer;
var geometry, material, mesh;



init();
animate();

function init() {

    scene = new THREE.Scene();

   window.camera =  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 1000;


	var geometry = new THREE.CylinderGeometry( 500, 500, 200, 32 );
	var material = new THREE.MeshBasicMaterial( {color: 0xffff00,map: THREE.ImageUtils.loadTexture(img)} );
	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

    // geometry = new THREE.BoxGeometry( 200, 200, 200 );
    // material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

    // mesh = new THREE.Mesh( geometry, material );
    // scene.add( mesh );

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

	var conl  = new THREE.OrbitControls(camera);

    document.body.appendChild( renderer.domElement );

}

function animate() {

    requestAnimationFrame( animate );

    // mesh.rotation.z += 0.01;
    // mesh.rotation.y += 0.02;

    renderer.render( scene, camera );

}