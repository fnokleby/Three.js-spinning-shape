const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(); //This is the shape, change "Box" to a shape
var material = new THREE.MeshBasicMaterial({ color: 0x00ffff }); //This is the color in hex, change something after "color: 0x"
const cube = new THREE.Mesh(geometry, material); //This actually makes the cube
scene.add(cube); //This adds the cube to the scene

camera.position.z = 5; // How close the camera is to the cube

const animate = function () {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

function redShape() {
    console.log("red")
    cube.material.color.setHex(0xff0000); // there is also setHSV and setRGB
}

function greenShape() {
    console.log("green")
    cube.material.color.setHex(0x00ff00); // there is also setHSV and setRGB
}

function blueShape() {
    console.log("blue")
    cube.material.color.setHex(0x0000ff); // there is also setHSV and setRGB
}

animate();