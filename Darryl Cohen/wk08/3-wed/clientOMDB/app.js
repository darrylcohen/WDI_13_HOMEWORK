$('button').on('click', function(){
  // HTTParty.get("http://omdbapi.com/?s=#{@movie}&apikey=2f6435d9").parsed_response['Search']
  var search = $('input').val()
  var url = "http://omdbapi.com/?s=" + search + "&apikey=2f6435d9"
  $.ajax({
    url: url,
    method: 'get',
    data: {}
  }).done(function(resp) {
    debugger
    $results = $('.results')
    $results.empty()

    resp.Search.forEach(function(aSearch){
      $h2 = $('<h2>')
      $a = $('<a>').text(aSearch.Title)
      debugger
      $a.attr("href", aSearch.Poster)
      $a.attr("target", "_blank")
      $h2.append($a)
      $results.append( $h2 )
    })

  }).fail(function() {
    console.log('whatever error');
  })
})
