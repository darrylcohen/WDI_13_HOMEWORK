$(document).ready(function(){
  var cityNames = ['Austin', 'LA', 'NYC', 'SF','Sydney']
  var classes = ['austin', 'la', 'nyc', 'sf', 'sydney']


  var $select = $('#city-type');
  cityNames.forEach (function(city){
    $select.append($('<option>').text(city))
  })

  $select.on('change', function(event){

    var aClass = classes[cityNames.indexOf(event.target.value)]
    $('body').removeClass();
    $('body').addClass(aClass);
  })
})
