(function() {
  var canvasWidth = window.innerWidth/3.5;
  var canvasHeight = window.innerHeight/4;

  // Define elements included
  var elementsIncluded = [
    { symbol : 'H', name : 'Hydrogen', position: {x:-16,y:4} },
    { symbol : 'x', name : 'Deuterium', position: false},
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
  // elementsIncluded.forEach(function(element,index,array) {
  //   $('.simple-element-list').append('<div class="element" id="'+element.name+'">'+element.symbol+'</div>');
  // });

  // Click functions
  $(document).on('click','.element',function() {
    for( var i = scene.children.length - 1; i >= 0; i--) {
      if(scene.children[i].type.indexOf('Mesh')>-1) {
        scene.remove(scene.children[i]);
      }
    }
    // makeProtonsAndNeutrons($(this).attr('id').toLowerCase());
    render();
  });

  // 3D work and rendering
  var three = THREE;

  var raycaster = new THREE.Raycaster();
  var mouse = new THREE.Vector2(), INTERSECTED;
  var scene = new three.Scene();
  var camera = new three.PerspectiveCamera(40, canvasWidth/canvasHeight, 0.1, 1000);

  // Here, the position of the camera is tilted
  camera.position.z = camera.position.z+275;
  $('.back-to-start').click(function() {
    camera.position.z = 10;
    camera.position.x = 0;
    camera.position.y = 0;
    camera.lookAt({x:0,y:0,z:0});
  });

  var renderer = new three.WebGLRenderer({ alpha : true });
  renderer.setClearColor( 0xFFFFFF, 0 );
  renderer.setSize(canvasWidth, canvasHeight);

  document.getElementById('SmallPeriodicTable').appendChild(renderer.domElement);

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
        letterBox.position.set(element.position.x,element.position.y,0);
        textMesh.position.set(element.position.x-0.7,element.position.y,0);

        scene.add(letterBox);
        scene.add(textMesh);
        render();

      });
  });

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
  controls = new THREE.OrbitControls( camera, document.getElementById('SmallPeriodicTable') );
  controls.addEventListener( 'change', render );
  controls.update();

  render();

  // Events
  document.addEventListener( 'mousemove', function() {

    event.preventDefault();

    mouse.x = ( event.clientX / canvasWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / canvasHeight ) * 2 + 1;

    render();

  }, false );

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
  //           if(scene.children[i].type.indexOf('Mesh')>-1&&typeof scene.children[i].userData.name==='undefined') {
  //             scene.remove(scene.children[i]);
  //           }
  //         }
  //         // makeProtonsAndNeutrons(intersects[0].object.userData.name.toLowerCase());
  //         // render();
  //       }
  //
  //   }

  // },false);

  // $('#SmallPeriodTable canvas').attr('style', 'width: '+canvasWidth+'px !important');
  // $('#SmallPeriodTable canvas').attr('style', 'height: '+canvasHeight+'px !important');
})();
