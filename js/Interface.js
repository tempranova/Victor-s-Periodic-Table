  // For pixel position, add 16 to x and subtract four from y and make positive
  var allNewHtml = '';
  elementsIncluded.forEach(function(element,index,array) {
    var htmlToAdd = '';
    if(index===0) {
      var htmlToAdd = '<div class="periodic-period">';
    }
    htmlToAdd += '<div class="periodic-element" id="'+element.name+'">'+element.symbol+'</div>';
    if(index<elementsIncluded.length-1) {
      if(elementsIncluded[index+1].info.period!==element.info.period) {
        htmlToAdd += '<div class="clearfix"></div></div><div class="periodic-period">';
      }
    }
    if(index===elementsIncluded.length-1) {
      htmlToAdd += '<div class="clearfix"></div></div>';
    }
    allNewHtml += htmlToAdd;
  });
  $('.periodic-menu').append(allNewHtml);
  $('.periodic-menu').append('<div class="clearfix"></div>');

  // Click functions
  $(document).on('click','.element, .periodic-element',function() {
    $('.lead').hide();
    for( var i = scene.children.length - 1; i >= 0; i--) {
      if(typeof scene.children[i] !== 'undefined') {
        if(scene.children[i].type.indexOf('Mesh')>-1||scene.children[i].type.indexOf('Group')>-1||scene.children[i].type.indexOf('Line')>-1) {
          scene.remove(scene.children[i]);
        }
        textLayers.forEach(function(element,index,array) {
          scene.remove(element);
        });
        textLayers = [];
      }
    }
    var currentElement = false;
    var that = this;
    elementsIncluded.forEach(function(element,index,array) {
      if(element.name===$(that).attr('id')) {
        currentElement = element;
      }
    });
    $('.element-name').html(currentElement.name);
    $('.element-symbol').html(currentElement.symbol);
    if(window.innerWidth<=767) {
      $('.group').html(currentElement.info.group.toString().substr(0, currentElement.info.group.toString().indexOf('(')));
    } else {
      $('.group').html(currentElement.info.group);
    }
    $('.period').html(currentElement.info.period);
    $('.atomicNumber').html(currentElement.info.atomicNumber);
    $('.atomicWeight').html(currentElement.info.atomicWeight);
    $('.state').html(currentElement.info.state);
    $('.meltingPoint').html(currentElement.info.meltingPoint);
    $('.boilingPoint').html(currentElement.info.boilingPoint);
    $('.isotopes').html(currentElement.info.isotopes);
    $('.electronConfig').html(currentElement.info.electronConfig);
    $('.oxidationStates').html(currentElement.info.oxidationState);
    $('.element-link').attr('href',currentElement.info.link);
    $('.nameHistory').html(currentElement.info.nameHistory);
    $('#bottom-legend').show();
    // Set up layout information to append
    var numberOfElectrons = 0;
    var orbitalsFilled = '';
    var orbitalsUnfilled = '';
    for(var electronShell in currentElement.layout[2][0]) {
      numberOfElectrons = numberOfElectrons + currentElement.layout[2][0][electronShell];
      // Set in proper unfilled and filled shell numbers
    }
    // 2s and 2p
    var infoToAdd = [
      currentElement.layout[0].length,
      currentElement.layout[1].length,
      numberOfElectrons,
      '',
      '',
      ''
    ];
    var infoToAddKey = ['Protons','Neutrons','Electrons','Filled Orbitals','Unfilled Orbitals','Unfilled Suborbitals'];
    // Actually create and add HTML
    var htmlToAdd = '';
    infoToAdd.forEach(function(element,index,array) {
        if(index===2) {
          htmlToAdd = htmlToAdd + '<li><a>'+
                                    '<input type="checkbox" class="toggle toggle-'+infoToAddKey[index].replace(/ /g,'-').toLowerCase()+'" /> '+
                                    infoToAddKey[index]+
                                  '</a></li>';
        } else {
          htmlToAdd = htmlToAdd + '<li><a>'+
                                    '<input type="checkbox" checked class="toggle toggle-'+infoToAddKey[index].replace(/ /g,'-').toLowerCase()+'" /> '+
                                    infoToAddKey[index]+
                                  '</a></li>';
        }
    });
    htmlToAdd = htmlToAdd + '';
    $('#bottom-legend .atom-dropdown-menu').html(htmlToAdd);
    $('input[type=checkbox]').each(function() {
      // $(this).bootstrapToggle({
      //   size: 'mini',
      //   on : '',
      //   off : '',
      //   width: 20,
      //   height: 10,
      //   style : $(this).attr('class')
      // });
    });
    $('#bottom-legend .toggle').on('click', function(event){
      event.stopPropagation();
    });
    var that = this;
    elementsIncluded.forEach(function(element,index,array) {
      if($(that).attr('id').toLowerCase()===element.name) {
        currentElement = element;
      }
    });
    makeProtonsAndNeutrons(currentElement);
    render();
  });

  $(document).on('change','.toggle',function() {
    if($(this).hasClass('toggle-protons')) {
      if($(this).is(':checked')) {
        scene.add(protons);
      } else {
        scene.remove(protons);
      }
    }
    if($(this).hasClass('toggle-neutrons')) {
      if($(this).is(':checked')) {
        scene.add(neutrons);
      } else {
        scene.remove(neutrons);
      }
    }
    if($(this).hasClass('toggle-electrons')) {
      if($(this).is(':checked')) {
        scene.add(electrons);
        moveElectrons = true;
      } else {
        scene.remove(electrons);
        moveElectrons = false;
      }
    }
    if($(this).hasClass('toggle-filled-orbitals')) {
      if($(this).is(':checked')) {
        scene.add(filledOrbitals);
      } else {
        scene.remove(filledOrbitals);
      }
    }
    if($(this).hasClass('toggle-unfilled-orbitals')) {
      if($(this).is(':checked')) {
        scene.add(unfilledOrbitals);
      } else {
        scene.remove(unfilledOrbitals);
      }
    }
    if($(this).hasClass('toggle-unfilled-suborbitals')) {
      if($(this).is(':checked')) {
        scene.add(unfilledSuborbitals);
      } else {
        scene.remove(unfilledSuborbitals);
      }
    }
  });

  $('.back-to-start').click(function() {
    camera.position.z = 60;
    camera.position.x = 40;
    camera.position.y = 20;
    camera.lookAt({x:0,y:0,z:0});
  });
