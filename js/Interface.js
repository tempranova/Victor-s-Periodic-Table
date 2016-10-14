// For pixel position, add 16 to x and subtract four from y and make positive
elementsIncluded.forEach(function(element,index,array) {
  $('.simple-element-list').append('<div class="element" id="'+element.name+'" style="margin-left:'+((parseInt(element.position.x)+16)*17)+'px;margin-top:'+Math.abs((element.position.y-4)*17)+'px;">'+element.symbol+'</div>');
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

$('.back-to-start').click(function() {
  camera.position.z = 60;
  camera.position.x = 40;
  camera.position.y = 20;
  camera.lookAt({x:0,y:0,z:0});
});
