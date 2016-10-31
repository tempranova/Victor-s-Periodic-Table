
  Physijs.scripts.worker = '/periodicTable/js/libraries/physijs_worker.js';
  Physijs.scripts.ammo = '/periodicTable/js/libraries/ammo.js';

  // Some variables I'll use later
  var color1s = 0x004899;
  var color2p = 0xa31919;
  var protonColor = 0xA2CEE9;
  var neutronColor = 0x49311C;
  var electronColor = 0xFFFFFF;

  var protons;
  var neutrons;
  var electrons;
  var electronShells;
  var filledSuborbitals;
  var unfilledSuborbitals;

  // Current atoms displayed on the screens
  var currentElement = false;
  var currentAtom;
  var currentAtomsDisplayed = [];

  // Basic three.js setup
  var three = THREE;
  var raycaster = new THREE.Raycaster();
  var mouse = new THREE.Vector2(), INTERSECTED;
  var scene = new Physijs.Scene;

  var camera = new three.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 0.1, 1000);

  // Here, the position of the camera is tilted
  camera.position.z = camera.position.z+60;
  camera.position.x = camera.position.x+40;
  camera.position.y = camera.position.y+20;

  // Set up the 3D window on the page
  var renderer = new three.WebGLRenderer({ alpha : true });
  renderer.setClearColor( 0xFFFFFF, 0 );
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('AtomicStage').appendChild(renderer.domElement);

  // Add light
  var ambient = new THREE.AmbientLight( 0x404040, 6 );
  scene.add( ambient );
  var light = new THREE.PointLight( 0xffffff, 7, 100 );
  light.position.set( 0,40,100 );
  scene.add( light );
  var light = new THREE.PointLight( 0xffffff, 7, 15 );
  light.position.set( 0,10,10 );
  scene.add( light );

  // Major abilities should be:
  // - Picking a first electron to put on stage
  // - Picking a second electron to put on stage
  // - Viewing different parts of an element (shells, protons, etc)
  // - Rotating and viewing elements interacting as bonds
  // - Introducing polarity
  // Functions should be able to handle this easily
  // - Making protons, electrons, neutrons, shells
  // - Adding to an array, making removable, etc

  function makeNucleon(element) {

  }

  function addElementToScene(element, offset) {
    // Every particle for this element must be created and added to the first proton
    // Then that group of particles is added to the array, where it's then added
    makeNucleon(element, offset);
  }

  // Proton
  function makeProtonsAndNeutrons(elementName) {
    // Protons have atomic weight of 1 and radius of 0.5
    if(typeof protons !=='undefined'&&typeof neutrons !=='undefined') {
      scene.remove(protons);
      scene.remove(neutrons);
    }
    protons = new THREE.Group();
    neutrons = new THREE.Group();

    var that = this;
    elementsIncluded.forEach(function(element,index,array) {
      if(element.name.toLowerCase()===elementName) {
        currentElement = element;
      }
    });

    if(currentElement) {

      // Colour is blue
      for(var i = 0; i < currentElement.layout[0].length; i++) {
        var radius = 0.5,
            segments = 16,
            rings = 16;

        var sphereMaterial = new THREE.MeshLambertMaterial({ color: protonColor });

        var sphere = new Physijs.SphereMesh(
          new THREE.SphereGeometry(radius,segments,rings),
          sphereMaterial
        );

        sphere.transparent = true;
        var xPositionOffset = currentElement.layout[0][i].x;
        var yPositionOffset = currentElement.layout[0][i].y;
        var zPositionOffset = currentElement.layout[0][i].z;
        sphere.position.set(xPositionOffset,yPositionOffset,zPositionOffset);
        scene.add(sphere);
        if(i === 0) {
          currentAtom = sphere;
          protons.add(sphere);
        } else {
          protons.add(sphere);
          currentAtom.add(sphere);
        }
      }
      scene.add(protons);
      // Neutrons have an atomic weight of 1 and radius of 0.5
      // Colour is brown neutral
      for(var i = 0; i < currentElement.layout[1].length; i++) {
        var radius = 0.5,
            segments = 16,
            rings = 16;

        var sphereMaterial = new THREE.MeshLambertMaterial({ color: neutronColor });

        var sphere = new Physijs.SphereMesh(
          new THREE.SphereGeometry(radius,segments,rings),
          sphereMaterial
        );

        sphere.transparent = true;
        var xPositionOffset = currentElement.layout[1][i].x;
        var yPositionOffset = currentElement.layout[1][i].y;
        var zPositionOffset = currentElement.layout[1][i].z;
        sphere.position.set(xPositionOffset,yPositionOffset,zPositionOffset);
        neutrons.add(sphere);
        currentAtom.add(sphere);
      }
      scene.add(neutrons);
    }
    makeElectronsAndOrbitals(currentElement);
  }

  // Set up electrons inside their orbitals
  function makeElectronsAndOrbitals(currentElement) {
    if(typeof electrons !=='undefined'&&typeof filledSuborbitals !=='undefined'&&typeof unfilledSuborbitals !=='undefined') {
      scene.remove(electrons);
      scene.remove(filledSuborbitals);
      scene.remove(unfilledSuborbitals);
    }
    electrons = new THREE.Group();
    filledSuborbitals = new THREE.Group();
    unfilledSuborbitals = new THREE.Group();
    // Function for returning three valid random values in any direction
    function getRandomValue(min,max,symmetric) {
      // This number should accurately represent the space in the circle for 1s
      var number = 0;
      if(Math.random()>0.5&&symmetric) {
        number = Math.random() * (0-(max/2)) - min;
      } else {
        number = Math.random() * (0+(max/2)) + min;
      }
      return number;
    }
    // Making the electrons as shells are made
    function makeElectrons(numberInThisShell,shellConstraints) {
      var allElectrons = [];
      for(var i = 0;i<numberInThisShell;i++) {
        var xPosition = getRandomValue(shellConstraints.x1,shellConstraints.x2,shellConstraints.symmetric.x);
        var yPosition = getRandomValue(shellConstraints.y1,shellConstraints.y2,shellConstraints.symmetric.y);
        var zPosition = getRandomValue(shellConstraints.z1,shellConstraints.z2,shellConstraints.symmetric.z);

        var radius = 0.1,
            segments = 16,
            rings = 16;

        var sphereMaterial =
          new THREE.MeshLambertMaterial(
            {
              color: electronColor,
              transparent : true,
              opacity: 0.8
            });

        var sphere = new THREE.Mesh(

          new THREE.SphereGeometry(
            radius,
            segments,
            rings),

          sphereMaterial);
        sphere.transparent = true;
        sphere.position.set(xPosition,yPosition,zPosition);
        electrons.add(sphere);
        currentAtom.add(sphere);
        allElectrons.push(sphere);
        setInterval(function() {
          for(i = 0; i < allElectrons.length; i++) {
            var xPosition = getRandomValue(shellConstraints.x1,shellConstraints.x2,shellConstraints.symmetric.x);
            var yPosition = getRandomValue(shellConstraints.y1,shellConstraints.y2,shellConstraints.symmetric.y);
            var zPosition = getRandomValue(shellConstraints.z1,shellConstraints.z2,shellConstraints.symmetric.z);
            // Dynamically modify positions allowed within a circle made by the radius of the two points
            // Assumes spheres are centered at 0,0
            var randomNumber = Math.random();
            if(randomNumber<=0.33) {
              var shellRadius = Math.abs((shellConstraints.x2-shellConstraints.x1)/2);
              var angleTheta = Math.acos(Math.abs(xPosition)/shellRadius);
              var maxValues = Math.sin(angleTheta);
              if(Math.abs(yPosition)>maxValues) {
                yPosition = maxValues * Math.sign(yPosition) + shellConstraints.offset.y;
              }
              if(Math.abs(zPosition)>maxValues) {
                zPosition = maxValues * Math.sign(zPosition) + shellConstraints.offset.z;
              }
            } else if(randomNumber>0.33&&randomNumber<0.66) {
              var shellRadius = Math.abs((shellConstraints.y2-shellConstraints.y1)/2);
              var angleTheta = Math.acos(Math.abs(yPosition)/shellRadius);
              var maxValues = Math.sin(angleTheta);
              if(Math.abs(xPosition)>maxValues) {
                xPosition = maxValues * Math.sign(xPosition) + shellConstraints.offset.x;
              }
              if(Math.abs(zPosition)>maxValues) {
                zPosition = maxValues * Math.sign(zPosition) + shellConstraints.offset.z;
              }
            } else if(randomNumber>=0.66) {
              var shellRadius = Math.abs((shellConstraints.z2-shellConstraints.z1)/2);
              var angleTheta = Math.acos(Math.abs(zPosition)/shellRadius);
              var maxValues = Math.sin(angleTheta);
              if(Math.abs(xPosition)>maxValues) {
                xPosition = maxValues * Math.sign(xPosition) + shellConstraints.offset.x;
              }
              if(Math.abs(yPosition)>maxValues) {
                yPosition = maxValues * Math.sign(yPosition) + shellConstraints.offset.y;
              }
            }
            allElectrons[i].position.set(xPosition,yPosition,zPosition);
          }
          render();
        },100);
      }

    }
    // Shells for electrons
    if(currentElement.layout[2].length>0) {
      // Electron orbital shapes to create
      currentElement.layout[2].forEach(function(element,index,array) {
        for(var shell in element) {
          if(shell==='1s') {
            // First electron orbital (1s)
            // 0.53 Angstroms = radius of 2
            var radius = 2 + (0.1 * (currentElement.layout[1].length + currentElement.layout[0].length)),
                segments = 16,
                rings = 16;

            var sphereMaterial =
              new THREE.MeshLambertMaterial(
                {
                  color: color1s,
                  transparent : true,
                  opacity: 0.34,
                  depthWrite: false
                });

            var sphere = new THREE.Mesh(

              new THREE.SphereGeometry(
                radius,
                segments,
                rings),

              sphereMaterial);
            sphere.transparent = true;
            if(currentElement.layout[2][index][shell]>=2) {
              filledSuborbitals.add(sphere);
              currentAtom.add(sphere);
            } else {
              unfilledSuborbitals.add(sphere);
              currentAtom.add(sphere);
            }
            makeElectrons(currentElement.layout[2][index][shell], {
                x1:-(radius), x2: radius, y1: -(radius), y2: radius, z1: -(radius), z2: radius,
                symmetric: {x: true, y: true, z: true},
                offset : {x : 0, y: 0, z: 0}
              }
            )
          }
          if(shell==='2p') {
            // Set of second electron orbitals (2p, includes 2s)
            // 2s
            var radius = 6 + (0.1 * (currentElement.layout[1].length + currentElement.layout[0].length)),
                segments = 16,
                rings = 16;

            var sphereMaterial =
              new THREE.MeshLambertMaterial(
                {
                  color: color2p,
                  transparent : true,
                  opacity: 0.1,
                  depthWrite: false
                });

            var sphere = new THREE.Mesh(

              new THREE.SphereGeometry(
                radius,
                segments,
                rings),

              sphereMaterial);
            sphere.transparent = true;
            if(currentElement.layout[2][index][shell]>=2) {
              filledSuborbitals.add(sphere);
              currentAtom.add(sphere);
            } else {
              unfilledSuborbitals.add(sphere);
              currentAtom.add(sphere);
            }
            var electronsToMake = currentElement.layout[2][index][shell];
            if(electronsToMake>2) {
              electronsToMake = 2;
            }
            makeElectrons(electronsToMake, {
                x1:-(radius), x2: radius, y1: -(radius), y2: radius, z1: -(radius), z2: radius,
                symmetric: {x: true, y: true, z: true},
                offset : {x : 0, y: 0, z: 0}
              }
            )

            // 2p
            for(var i=0;i<=2;i++) {
              var radius = 4 + (0.1 * (currentElement.layout[1].length + currentElement.layout[0].length)),
                  segments = 16,
                  rings = 16;

              var sphereMaterial =
                new THREE.MeshLambertMaterial(
                  {
                    color: color2p,
                    transparent : true,
                    opacity: 0.1,
                    depthWrite: false
                  });

              var sphere = new THREE.Mesh(

                new THREE.SphereGeometry(
                  radius,
                  segments,
                  rings),

              sphereMaterial);
              var sphere2 = new THREE.Mesh(

                new THREE.SphereGeometry(
                  radius,
                  segments,
                  rings),

              sphereMaterial);

              sphere.position = { x: 0, y: 0, z: 0};
              sphere2.position = { x: 0, y: 0, z: 0};
              if(i===0) {
                sphere.scale.x = sphere.scale.x/2;
                sphere.position.y = -6;
                sphere.transparent = true;
                if(currentElement.layout[2][index][shell]>=3) {
                  filledSuborbitals.add(sphere);
                  currentAtom.add(sphere);
                  makeElectrons(1,
                    {x1:-(radius/2), x2: radius/2, y1: -(radius*2), y2: radius*2, z1: -(radius), z2: radius,
                      symmetric: {x: true, y: false, z: true},
                      offset : {x : 0, y: -6, z: 0}
                    }
                  );
                } else {
                  unfilledSuborbitals.add(sphere);
                  currentAtom.add(sphere);
                }
                sphere2.scale.x = sphere2.scale.x/2;
                sphere2.position.y = 6;
                sphere2.transparent = true;
                if(currentElement.layout[2][index][shell]>=6) {
                  filledSuborbitals.add(sphere2);
                  currentAtom.add(sphere2);
                  makeElectrons(1,
                    {x1:-(radius/2), x2: radius/2, y1: -(radius*2), y2: radius*2, z1: -(radius), z2: radius,
                      symmetric: {x: true, y: false, z: true},
                      offset : {x : 0, y: 6, z: 0}
                    }
                  );
                } else {
                  unfilledSuborbitals.add(sphere2);
                  currentAtom.add(sphere2);
                }
              } else if(i===1) {
                sphere.scale.y = sphere.scale.y/2;
                sphere.position.z = -6;
                sphere.transparent = true;
                sphere2.scale.y = sphere2.scale.y/2;
                sphere2.position.z = 6;
                sphere2.transparent = true;
                if(currentElement.layout[2][index][shell]>=4) {
                  filledSuborbitals.add(sphere);
                  currentAtom.add(sphere);
                  makeElectrons(1,
                    {x1:-(radius), x2: radius, y1: -(radius/2), y2: radius/2, z1: -(radius*2), z2: radius*2,
                      symmetric: {x: true, y: true, z: false},
                      offset : {x : 0, y: 0, z: -6}
                    }
                  );
                } else {
                  unfilledSuborbitals.add(sphere);
                  currentAtom.add(sphere);
                }
                if(currentElement.layout[2][index][shell]>=7) {
                  filledSuborbitals.add(sphere2);
                  currentAtom.add(sphere2);
                  makeElectrons(1,
                    {x1:-(radius), x2: radius, y1: -(radius/2), y2: radius/2, z1: -(radius*2), z2: radius*2,
                      symmetric: {x: true, y: true, z: false},
                      offset : {x : 0, y: 0, z: 6}
                    }
                  );
                } else {
                  unfilledSuborbitals.add(sphere2);
                  currentAtom.add(sphere2);
                }
              } else if(i===2) {
                sphere.scale.z = sphere.scale.z/2;
                sphere.position.x = -6;
                sphere.transparent = true;
                sphere2.scale.z = sphere2.scale.z/2;
                sphere2.position.x = 6;
                sphere2.transparent = true;
                if(currentElement.layout[2][index][shell]>=5) {
                  filledSuborbitals.add(sphere);
                  currentAtom.add(sphere);
                  makeElectrons(1,
                    {x1:-(radius*2), x2: radius*2, y1: -(radius), y2: radius, z1: -(radius/2), z2: radius/2,
                      symmetric: {x: false, y: true, z: true},
                      offset : {x : -6, y: 0, z: 0}
                    }
                  );
                } else {
                  unfilledSuborbitals.add(sphere);
                  currentAtom.add(sphere);
                }
                if(currentElement.layout[2][index][shell]>=8) {
                  filledSuborbitals.add(sphere2);
                  currentAtom.add(sphere2);
                  makeElectrons(1,
                    {x1:-(radius*2), x2: radius*2, y1: -(radius), y2: radius, z1: -(radius/2), z2: radius/2,
                      symmetric: {x: false, y: true, z: true},
                      offset : {x : 6, y: 0, z: 0}
                    }
                  );
                } else {
                  unfilledSuborbitals.add(sphere2);
                  currentAtom.add(sphere2);
                }
              }
            }
          }
        }
      });
      scene.add(electrons);
      scene.add(filledSuborbitals);
      scene.add(unfilledSuborbitals);
      scene.add(currentAtom);
    }
  }

  THREEx.WindowResize(renderer, camera);

  function render() {
      // if(typeof neutrons !== 'undefined') {
      //   neutrons.children.forEach(function(element,index,array) {
      //     element.position.x += 0.1;
      //   });
      // }
      scene.simulate(); // run physics
      renderer.render(scene, camera);

      // raycaster.setFromCamera( mouse, camera );
      //
      // var intersects = raycaster.intersectObjects( scene.children );
      //
      // if ( intersects.length > 0 ) {
      //
      //   if ( INTERSECTED != intersects[ 0 ].object ) {
      //
      //     if(typeof intersects[0].object.userData.name !== 'undefined') {
      //
      //       if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
      //
      //       INTERSECTED = intersects[ 0 ].object;
      //       INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
      //       INTERSECTED.material.color.setHex( 0xFF0000 );
      //     }
      //
      //   }
      //
      // } else {
      //
      //   if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
      //
      //   INTERSECTED = null;
      //
      // }

      // requestAnimFrame(render);
  }

  // Rotation around the center
  var controls;
  controls = new THREE.OrbitControls( camera );
  controls.addEventListener( 'change', render );
  controls.update();

  render();

  // Events
  // document.addEventListener( 'mousemove', function() {
  //
  //   event.preventDefault();
  //
  //   mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  //   mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  //
  //   render();
  //
  // }, false );

  // document.addEventListener( 'click', function() {
  //
  //   raycaster.setFromCamera( mouse, camera );
  //
  //   var intersects = raycaster.intersectObjects( scene.children );
  //
  //   if ( intersects.length > 0 ) {
  //
  //       if(intersects[0].object.userData.name) {
  //         for( var i = scene.children.length - 1; i >= 0; i--) {
  //           console.log(scene.children[i]);
  //           if(scene.children[i].type.indexOf('Mesh')>-1&&typeof scene.children[i].userData.name==='undefined') {
  //             scene.remove(scene.children[i]);
  //           }
  //         }
  //         makeProtonsAndNeutrons(intersects[0].object.userData.name.toLowerCase());
  //         render();
  //       }
  //
  //   }
  //
  // },false);
