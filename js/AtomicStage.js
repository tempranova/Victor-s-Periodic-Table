
  // Define elements included
  var elementsIncluded = [
    { symbol : 'H', name : 'Hydrogen', position: {x:-16,y:4} },
    { symbol : 'He', name : 'Helium', position: {x:18,y:4} },

    { symbol : 'Li', name : 'Lithium', position: {x:-16,y:2} },
    { symbol : 'Be', name : 'Beryllium', position: {x:-14,y:2} },
    { symbol : 'B', name : 'Boron', position: {x:8,y:2} },
    { symbol : 'C', name : 'Carbon', position: {x:10,y:2} },
    { symbol : 'N', name : 'Nitrogen', position: {x:12,y:2} },
    { symbol : 'O', name : 'Oxygen', position: {x:14,y:2} },
    { symbol : 'F', name : 'Fluorine', position: {x:16,y:2} },
    { symbol : 'Ne', name : 'Neon', position: {x:18,y:2} },

    { symbol : 'Na', name : 'Sodium', position: {x:-16,y:0} },
    { symbol : 'Mg', name : 'Magnesium', position: {x:-14,y:0} },
    { symbol : 'Al', name : 'Aluminium', position: {x:8,y:0} },
    { symbol : 'Si', name : 'Silicon', position: {x:10,y:0} },
    { symbol : 'P', name : 'Phosphorus', position: {x:12,y:0} },
    { symbol : 'S', name : 'Sulfur', position: {x:14,y:0} },
    { symbol : 'Cl', name : 'Chlorine', position: {x:16,y:0} },
    { symbol : 'Ar', name : 'Argon', position: {x:18,y:0} },

    { symbol : 'K', name : 'Potassium', position: {x:-16,y:-2} },
    { symbol : 'Ca', name : 'Calcium', position: {x:-14,y:-2} },
    { symbol : 'Sc', name : 'Scandium', position: {x:-12,y:-2} },
    { symbol : 'Ti', name : 'Titanium', position: {x:-10,y:-2} },
    { symbol : 'V', name : 'Vanadium', position: {x:-8,y:-2} },
    { symbol : 'Cr', name : 'Chromium', position: {x:-6,y:-2} },
    { symbol : 'Mn', name : 'Manganese', position: {x:-4,y:-2} },
    { symbol : 'Fe', name : 'Iron', position: {x:-2,y:-2} },
    { symbol : 'Co', name : 'Cobalt', position: {x:0,y:-2} },
    { symbol : 'Ni', name : 'Nickel', position: {x:2,y:-2} },
    { symbol : 'Cu', name : 'Copper', position: {x:4,y:-2} },
    { symbol : 'Zn', name : 'Zinc', position: {x:6,y:-2} },
    { symbol : 'Ga', name : 'Gallium', position: {x:8,y:-2} },
    { symbol : 'Ge', name : 'Germanium', position: {x:10,y:-2} },
    { symbol : 'As', name : 'Arsenic', position: {x:12,y:-2} },
    { symbol : 'Se', name : 'Selenium', position: {x:14,y:-2} },
    { symbol : 'Br', name : 'Bromine', position: {x:16,y:-2} },
    { symbol : 'Kr', name : 'Krypton', position: {x:18,y:-2} }
  ];
  // For pixel position, add 16 to x and subtract four from y and make positive
  elementsIncluded.forEach(function(element,index,array) {
    $('.simple-element-list').append('<div class="element" id="'+element.name+'" style="margin-left:'+((parseInt(element.position.x)+16)*15)+'px;margin-top:'+Math.abs((element.position.y-4)*15)+'px;">'+element.symbol+'</div>');
  });

  // Click functions
  $(document).on('click','.element',function() {
    for( var i = scene.children.length - 1; i >= 0; i--) {
      if(scene.children[i].type.indexOf('Mesh')>-1) {
        scene.remove(scene.children[i]);
      }
    }
    makeProtonsAndNeutrons($(this).attr('id').toLowerCase());
    render();
  });

  // List of elemental x,y,z points
  var listOfElementLayouts = {
    hydrogen : [
      [{x:0,y:0,z:0}],
      [],
      [{'1s':1}],
    ],
    deuterium : [
      [{x:0.5,y:0,z:0}],
      [{x:-0.5,y:0,z:0}],
      [{'1s':1}]
    ],
    helium : [
      [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0}],
      [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0}],
      [{'1s':2}]
    ],
    lithium : [
      [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5}],
      [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5}],
      [{'1s':2,'2s':1}]
    ],
    beryllium : [
      [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5}],
      [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5}],
      [{'1s':2,'2s':2}]
    ],
    boron : [
      [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5}],
      [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5}],
      [{'1s':2,'2s':2,'3p':1}]
    ],
    carbon : [
      [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5}],
      [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5}],
      [{'1s':2,'2s':2,'3p':2}]
    ],
    nitrogen : [
      [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5}],
      [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5}],
      [{'1s':2,'2s':2,'3p':3}]
    ],
    oxygen : [
      [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75}],
      [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75}],
      [{'1s':2,'2s':2,'3p':4}]
    ],
    fluorine : [
      [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75}],
      [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75}],
      [{'1s':2,'2s':2,'3p':5}]
    ],
    neon : [
      [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75},{x:0.75,y:0,z:0.75}],
      [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75},{x:-0.75,y:0,z:-0.75}],
      [{'1s':2,'2s':2,'3p':6}]
    ],
    sodium : [
      [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75},{x:0.75,y:0,z:0.75},{x:0.75,y:0.75,z:0}],
      [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75},{x:-0.75,y:0,z:-0.75},{x:-0.75,y:-0.75,z:0}],
      [{'1s':2,'2s':2,'3p':6}]
    ],
    magnesium : [
      [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:0.5},{x:0,y:0.75,z:0.75},{x:0,y:0.75,z:-0.75},{x:-0.75,y:0,z:-0.75},{x:0.75,y:0.75,z:0},{x:-1,y:0,z:0}],
      [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:-0.5},{x:0,y:-0.75,z:-0.75},{x:0,y:-0.75,z:0.75},{x:0.75,y:0,z:0.75},{x:-0.75,y:-0.75,z:0},{x:1,y:0,z:0}],
      [{'1s':2,'2s':2,'3p':6}]
    ],
  }

  // 3D work and rendering
  var three = THREE;

  var raycaster = new THREE.Raycaster();
  var mouse = new THREE.Vector2(), INTERSECTED;
  var scene = new three.Scene();
  var camera = new three.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 0.1, 1000);

  // Here, the position of the camera is tilted
  camera.position.z = camera.position.z+100;
  $('.back-to-start').click(function() {
    camera.position.z = 100;
    camera.position.x = 0;
    camera.position.y = 0;
    camera.lookAt({x:0,y:0,z:0});
  });

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

  // Periodic table in 3D
  var loader = new THREE.FontLoader();
  loader.load("js/fonts/helvetiker_regular.typeface.js", function(font) {
      elementsIncluded.forEach(function(element,index,array) {


        var geometry = new THREE.TextGeometry( element.symbol, {
          font: font,
          size : 0.8,
          height: 0.1
        } );

        var textMat = new THREE.MeshPhongMaterial({
          color: 0x156289
        });

        var textMesh = new THREE.Mesh(geometry,textMat);
        var box = new THREE.Box3().setFromObject( textMesh );

        var geometry = new THREE.BoxBufferGeometry( 2, 2, 0.5 );
        var boxMaterial =
          new THREE.MeshLambertMaterial(
            {
              color: 0xA2CEE9,
              transparent : true,
              opacity: 0.3,
            });

        raycaster = new THREE.Raycaster();
        var letterBox = new THREE.Mesh(geometry,boxMaterial);
        letterBox.userData = {
          name : element.name
        };
        textMesh.userData = {
          name : element.name
        };

        var letterWidthX = box.max.x - box.min.x;
        var letterHeightY = box.max.y - box.min.y;
        var distanceFromBottom = ((letterWidthX+1)-(letterHeightY))/2;
        letterBox.position.set(element.position.x,element.position.y,50);
        textMesh.position.set(element.position.x-0.7,element.position.y,50);

        scene.add(letterBox);
        scene.add(textMesh);
        render();

      });
  });

  // Proton
  function makeProtonsAndNeutrons(elementName) {
    // Protons have atomic weight of 1 and radius of 0.5

    // Select the right element
    var currentElement = false;
    for(var element in listOfElementLayouts) {
      if(element===elementName) {
        currentElement = listOfElementLayouts[element];
      }
    }
    if(currentElement) {
      $('.information').html(
        '<p><strong>Protons: </strong>' + currentElement[0].length+
        '<br /><strong>Neutrons: </strong>' + currentElement[1].length
      ).show();

      // Colour is blue
      for(var i = 0; i < currentElement[0].length; i++) {
        var radius = 0.5,
            segments = 16,
            rings = 16;

        var sphereMaterial =
          new THREE.MeshLambertMaterial(
            {
              color: 0xA2CEE9
            });

        var sphere = new THREE.Mesh(

          new THREE.SphereGeometry(
            radius,
            segments,
            rings),

          sphereMaterial);
        sphere.transparent = true;
        var xPositionOffset = currentElement[0][i].x;
        var yPositionOffset = currentElement[0][i].y;
        var zPositionOffset = currentElement[0][i].z;
        sphere.position.set(xPositionOffset,yPositionOffset,zPositionOffset);
        scene.add(sphere);
      }
      // Neutrons have an atomic weight of 1 and radius of 0.5
      // Colour is brown neutral
      for(var i = 0; i < currentElement[1].length; i++) {
        var radius = 0.5,
            segments = 16,
            rings = 16;

        var sphereMaterial =
          new THREE.MeshLambertMaterial(
            {
              color: 0x49311C
            });

        var sphere = new THREE.Mesh(

          new THREE.SphereGeometry(
            radius,
            segments,
            rings),

          sphereMaterial);
        sphere.transparent = true;
        var xPositionOffset = currentElement[1][i].x;
        var yPositionOffset = currentElement[1][i].y;
        var zPositionOffset = currentElement[1][i].z;
        sphere.position.set(xPositionOffset,yPositionOffset,zPositionOffset);
        scene.add(sphere);
      }
    }
    makeElectronsAndOrbitals(currentElement);
  }

  // Set up electrons inside their orbitals
  function makeElectronsAndOrbitals(currentElement) {
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
              color: 0xFFFFFF,
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
        scene.add(sphere);
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
    if(currentElement[2].length>0) {
      // Electron orbital shapes to create
      currentElement[2].forEach(function(element,index,array) {
        for(var shell in element) {
          if(shell==='1s') {
            // First electron orbital (1s)
            // 0.53 Angstroms = radius of 2
            var radius = 2 + (0.1 * (currentElement[1].length + currentElement[0].length)),
                segments = 16,
                rings = 16;

            var sphereMaterial =
              new THREE.MeshLambertMaterial(
                {
                  color: 0x004899,
                  transparent : true,
                  opacity: 0.05,
                  depthWrite: false
                });

            var sphere = new THREE.Mesh(

              new THREE.SphereGeometry(
                radius,
                segments,
                rings),

              sphereMaterial);
            sphere.transparent = true;
            scene.add(sphere);
            makeElectrons(currentElement[2][index][shell], {
                x1:-(radius), x2: radius, y1: -(radius), y2: radius, z1: -(radius), z2: radius,
                symmetric: {x: true, y: true, z: true},
                offset : {x : 0, y: 0, z: 0}
              }
            )
          }
          if(shell==='2s') {
            // Second electron orbital (2s)
            // ??
            var radius = 6 + (0.1 * (currentElement[1].length + currentElement[0].length)),
                segments = 16,
                rings = 16;

            var sphereMaterial =
              new THREE.MeshLambertMaterial(
                {
                  color: 0x004899,
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
            scene.add(sphere);
            makeElectrons(currentElement[2][index][shell], {
                x1:-(radius), x2: radius, y1: -(radius), y2: radius, z1: -(radius), z2: radius,
                symmetric: {x: true, y: true, z: true},
                offset : {x : 0, y: 0, z: 0}
              }
            )
          }
          if(shell==='3p') {
            // Set of third electron orbitals (3p)
            //
            for(var i=0;i<=2;i++) {
              var radius = 4 + (0.1 * (currentElement[1].length + currentElement[0].length)),
                  segments = 16,
                  rings = 16;

              var sphereMaterial =
                new THREE.MeshLambertMaterial(
                  {
                    color: 0xa31919,
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
                scene.add(sphere);
                if(currentElement[2][index][shell]>=1) {
                  makeElectrons(1,
                    {x1:-(radius/2), x2: radius/2, y1: -(radius*2), y2: radius*2, z1: -(radius), z2: radius,
                      symmetric: {x: true, y: false, z: true},
                      offset : {x : 0, y: -6, z: 0}
                    }
                  );
                }
                sphere2.scale.x = sphere2.scale.x/2;
                sphere2.position.y = 6;
                sphere2.transparent = true;
                scene.add(sphere2);
                if(currentElement[2][index][shell]>=4) {
                  makeElectrons(1,
                    {x1:-(radius/2), x2: radius/2, y1: -(radius*2), y2: radius*2, z1: -(radius), z2: radius,
                      symmetric: {x: true, y: false, z: true},
                      offset : {x : 0, y: 6, z: 0}
                    }
                  );
                }
              } else if(i===1) {
                sphere.scale.y = sphere.scale.y/2;
                sphere.position.z = -6;
                sphere.transparent = true;
                sphere2.scale.y = sphere2.scale.y/2;
                sphere2.position.z = 6;
                sphere2.transparent = true;
                scene.add(sphere);
                if(currentElement[2][index][shell]>=2) {
                  makeElectrons(1,
                    {x1:-(radius), x2: radius, y1: -(radius/2), y2: radius/2, z1: -(radius*2), z2: radius*2,
                      symmetric: {x: true, y: true, z: false},
                      offset : {x : 0, y: 0, z: -6}
                    }
                  );
                }
                scene.add(sphere2);
                if(currentElement[2][index][shell]>=5) {
                  makeElectrons(1,
                    {x1:-(radius), x2: radius, y1: -(radius/2), y2: radius/2, z1: -(radius*2), z2: radius*2,
                      symmetric: {x: true, y: true, z: false},
                      offset : {x : 0, y: 0, z: 6}
                    }
                  );
                }
              } else if(i===2) {
                sphere.scale.z = sphere.scale.z/2;
                sphere.position.x = -6;
                sphere.transparent = true;
                sphere2.scale.z = sphere2.scale.z/2;
                sphere2.position.x = 6;
                sphere2.transparent = true;
                scene.add(sphere);
                if(currentElement[2][index][shell]>=3) {
                  makeElectrons(1,
                    {x1:-(radius*2), x2: radius*2, y1: -(radius), y2: radius, z1: -(radius/2), z2: radius/2,
                      symmetric: {x: false, y: true, z: true},
                      offset : {x : -6, y: 0, z: 0}
                    }
                  );
                }
                scene.add(sphere2);
                if(currentElement[2][index][shell]>=6) {
                  makeElectrons(1,
                    {x1:-(radius*2), x2: radius*2, y1: -(radius), y2: radius, z1: -(radius/2), z2: radius/2,
                      symmetric: {x: false, y: true, z: true},
                      offset : {x : 6, y: 0, z: 0}
                    }
                  );
                }
              }
            }
          }
        }
      });
    }
  }

  // shim layer with setTimeout fallback
  // window.requestAnimFrame = (function(){
  //     return  window.requestAnimationFrame ||
  //         window.webkitRequestAnimationFrame ||
  //         window.mozRequestAnimationFrame ||
  //         function(callback) {
  //             window.setTimeout(callback, 1000 / 60);
  //         };
  // })();

  THREEx.WindowResize(renderer, camera);

  function render() {
      renderer.render(scene, camera);

      raycaster.setFromCamera( mouse, camera );

      var intersects = raycaster.intersectObjects( scene.children );

      if ( intersects.length > 0 ) {

        if ( INTERSECTED != intersects[ 0 ].object ) {

          if(typeof intersects[0].object.userData.name !== 'undefined') {

            if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );

            INTERSECTED = intersects[ 0 ].object;
            INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
            INTERSECTED.material.color.setHex( 0xFF0000 );
          }

        }

      } else {

        if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );

        INTERSECTED = null;

      }

      // requestAnimFrame(render);
  }

  // Rotation around the center
  var controls;
  controls = new THREE.OrbitControls( camera );
  controls.addEventListener( 'change', render );
  controls.update();

  render();

  // Events
  document.addEventListener( 'mousemove', function() {

    event.preventDefault();

    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    render();

  }, false );

  document.addEventListener( 'click', function() {

    raycaster.setFromCamera( mouse, camera );

    var intersects = raycaster.intersectObjects( scene.children );

    if ( intersects.length > 0 ) {

        if(intersects[0].object.userData.name) {
          for( var i = scene.children.length - 1; i >= 0; i--) {
            console.log(scene.children[i]);
            if(scene.children[i].type.indexOf('Mesh')>-1&&typeof scene.children[i].userData.name==='undefined') {
              scene.remove(scene.children[i]);
            }
          }
          makeProtonsAndNeutrons(intersects[0].object.userData.name.toLowerCase());
          render();
        }

    }

  },false);
