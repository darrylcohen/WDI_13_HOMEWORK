var results
$gifs = $('.gifs')
var count = 0
var offSet = 10

var display = function(displayNum) {
  count = count + displayNum
  for (var i = count - 10; i < count ; i++) {
    if (i < results.data.length) {
      $image = $('<img>')
      $image.attr("src", results.data[i].images.downsized.url)
      $gifs.append($image)
      $gifs.append(i)
    }
  }
}

$('button').on('click', function(){
  // search = $('input').val()
  search = 'ryan'
  var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="  + search + "&api_key=Tz42VwBGQ5iddnVbMdfmUrJzpqJUYItQ&limit=100&offset=10");
  xhr.done(function(elem) {
    results = elem
    display(10)
  });
})

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
     display(10)
   }
});
