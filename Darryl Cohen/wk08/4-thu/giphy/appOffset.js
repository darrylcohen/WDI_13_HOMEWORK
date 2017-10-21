var results
$gifs = $('.gifs')
var count = 0
var offSet = 10

var display = function(displayNum) {
  count = count + displayNum
  for (var i = count - 10; i < count ; i++) {
    if (i < results.data.length) {
    }
  }
}

var getData = function(search, offSet) {
  var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="  + search + "&api_key=Tz42VwBGQ5iddnVbMdfmUrJzpqJUYItQ&limit=100&limit=10&offset=" + offSet);
  xhr.done(function(elem) {
    elem.data.forEach(function(result){
      $image = $('<img>')
      $image.attr("src", result.images.downsized.url)
      $gifs.append($image)
    })
  });

}

$('button').on('click', function(){
  search = $('input').val()
  // search = 'ryan'
  offSet = 10
  getData(search, offSet)
})

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
     search = 'ryan'
     offSet += 10
     getData(search, offSet)
   }
});
