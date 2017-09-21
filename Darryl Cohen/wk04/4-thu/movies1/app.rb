require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do

  erb :index
end

get '/about' do
  @movie = params[:movie]

  @result = HTTParty.get("http://omdbapi.com/?s=#{@movie}&apikey=2f6435d9").parsed_response['Search']

  erb :about
end

get '/movie_details' do
  @title = params[:title]

  @img = HTTParty.get("http://omdbapi.com/?t=#{@title}&apikey=2f6435d9").parsed_response['Poster']

  erb :movie_details

end
