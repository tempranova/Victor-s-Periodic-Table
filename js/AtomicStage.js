  // Some variables I'll use later
  var color1s = 0x004899;
  var color2p = 0xa31919;
  var color3p = 0x147D21;
  var color3d = 0xFFFF00;
  var protonColor = 0xA2CEE9;
  var neutronColor = 0x49311C;
  var electronColor = 0xFFFFFF;

  var protons;
  var neutrons;
  var electrons;
  var moveElectrons = false;
  var electronShells;
  var filledOrbitals;
  var unfilledOrbitals;
  var unfilledSuborbitals;
  var textLayers = [];
  var textLines = [];

  // Current atoms displayed on the screens
  var currentElement = false;
  var currentAtom;
  var currentAtomsDisplayed = [];
  var textMesh;

  // 3D work and rendering
  var three = THREE;

  var raycaster = new THREE.Raycaster();
  var mouse = new THREE.Vector2(), INTERSECTED;
  var scene = new three.Scene();
  var camera = new three.PerspectiveCamera(100, document.getElementById('page-content-wrapper').offsetWidth/window.innerHeight, 0.1, 1000);
  // Here, the position of the camera is tilted
  camera.position.z = camera.position.z+60;
  camera.position.x = camera.position.x+40;
  camera.position.y = camera.position.y+0;

  var renderer = new three.WebGLRenderer({ alpha : true });
  renderer.setClearColor( 0xFFFFFF, 0 );
  $(document).ready(function() {
    camera.updateProjectionMatrix(40, document.getElementById('page-content-wrapper').offsetWidth/window.innerHeight, 0.1, 1000);
    renderer.setSize(document.getElementById('page-content-wrapper').offsetWidth, window.innerHeight);
  });

  document.getElementById('AtomicStage').appendChild(renderer.domElement);

  // Add light
  var ambient = new THREE.AmbientLight( 0x404040, 6 );
  scene.add( ambient );
  // var light = new THREE.PointLight( 0xffffff, 7, 100 );
  // light.position.set( 0,40,100 );
  // scene.add( light );
  var light = new THREE.PointLight( 0xffffff, 7, 100 );
  light.position.set( 0,100,500 );
  scene.add( light );
  var light = new THREE.PointLight( 0xffffff, 7, 35 );
  light.position.set( 0,10,10 );
  scene.add( light );

  THREEx.WindowResize(renderer, camera);

  function render() {
      renderer.render(scene, camera);
  }

  // Rotation around the center
  var controls;
  controls = new THREE.OrbitControls( camera );
  controls.addEventListener( 'change', render );
  controls.update();

  render();
