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
  var currentElement = false;
  var that = this;
  elementsIncluded.forEach(function(element,index,array) {
    if(element.name===$(that).attr('id')) {
      currentElement = element;
    }
  });
  $('.information').html(
    '<div class="element-square">' + currentElement.symbol + '</div>'+
    '<div class="basic-info">'+
    '</div>'
  ).show();
  // Set up layout information to append
  var numberOfElectrons = 0;
  var suborbitalsFilled = '';
  var suborbitalsUnfilled = '';
  for(var electronShell in currentElement.layout[2][0]) {
    numberOfElectrons = numberOfElectrons + currentElement.layout[2][0][electronShell];
    // Set in proper unfilled and filled shell numbers
  }
  // 1s shell
  if(numberOfElectrons<2) {
    suborbitalsUnfilled = '(1s)';
  } else if(numberOfElectrons<10) {
    suborbitalsFilled = '(1s)';
    suborbitalsUnfilled = '(2p)';
  } else if(numberOfElectrons<18) {
    suborbitalsFilled = '(1s, 2p)';
    suborbitalsUnfilled = '(3p)';
  }
  // 2s and 2p
  var infoToAdd = [
    currentElement.layout[0].length,
    currentElement.layout[1].length,
    numberOfElectrons,
    suborbitalsFilled,
    suborbitalsUnfilled
  ];
  var infoToAddKey = ['Protons','Neutrons','Electrons','Filled Suborbitals','Unfilled Suborbitals'];
  // Actually create and add HTML
  var htmlToAdd = '<ul class="list-group">';
  infoToAdd.forEach(function(element,index,array) {
    if(element>0||element.length>2) {
      var extraToAdd = '';
      var badge = '<span class="badge">'+element+'</span>';
      if(infoToAddKey[index]==='Filled Suborbitals') {
        extraToAdd = ' '+suborbitalsFilled;
        element = element.split(",").length;
        badge = '';
      }
      if(infoToAddKey[index]==='Unfilled Suborbitals') {
        extraToAdd = ' '+suborbitalsUnfilled;
        element = element.split(",").length;
        badge = '';
      }
      htmlToAdd = htmlToAdd + '<li class="list-group-item">'+
                                badge+
                                '<input type="checkbox" checked class="toggle-'+infoToAddKey[index].replace(/ /g,'-').toLowerCase()+'" /> '+
                                infoToAddKey[index]+extraToAdd+
                              '</li>';
    }
  });
  htmlToAdd = htmlToAdd + '</ul>';
  $('#side-legend').html(htmlToAdd).show();
  $('input[type=checkbox]').each(function() {
    $(this).bootstrapToggle({
      size: 'mini',
      on : '',
      off : '',
      width: 20,
      height: 10,
      style : $(this).attr('class')
    });
  });
  var that = this;
  elementsIncluded.forEach(function(element,index,array) {
    if($(this).attr('id').toLowerCase()===elementName) {
      currentElement = element;
    }
  });
  makeProtonsAndNeutrons(element);
  render();
});

$(document).on('click','.toggle',function() {
  if($(this).hasClass('toggle-protons')) {
    if($(this).hasClass('off')) {
      scene.remove(protons);
    } else {
      scene.add(protons);
    }
  }
  if($(this).hasClass('toggle-neutrons')) {
    if($(this).hasClass('off')) {
      scene.remove(neutrons);
    } else {
      scene.add(neutrons);
    }
  }
  if($(this).hasClass('toggle-electrons')) {
    if($(this).hasClass('off')) {
      scene.remove(electrons);
    } else {
      scene.add(electrons);
    }
  }
  if($(this).hasClass('toggle-filled-suborbitals')) {
    if($(this).hasClass('off')) {
      scene.remove(filledSuborbitals);
    } else {
      scene.add(filledSuborbitals);
    }
  }
  if($(this).hasClass('toggle-unfilled-suborbitals')) {
    if($(this).hasClass('off')) {
      scene.remove(unfilledSuborbitals);
    } else {
      scene.add(unfilledSuborbitals);
    }
  }
});

$('.back-to-start').click(function() {
  camera.position.z = 60;
  camera.position.x = 40;
  camera.position.y = 20;
  camera.lookAt({x:0,y:0,z:0});
});
