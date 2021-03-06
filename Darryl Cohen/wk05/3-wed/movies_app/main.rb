
require 'sinatra'
require 'sinatra/reloader'
require_relative 'db_config'
require 'pry'
require_relative 'models/movie'
require 'httparty'
require 'byebug'

get '/' do
  erb :index
end

get '/movies' do
  @movie = params[:movie]
  @result = HTTParty.get("http://omdbapi.com/?s=#{@movie}&apikey=2f6435d9").parsed_response['Search']
  if @result == nil
    # Dont use REDIRECT, use erb: index
    redirect '/'
  elsif @result.length == 1
    redirect "/movie_details/#{URI.escape(@result[0]['Title'])}"
  else

    erb :movies
  end

end

get '/movie_details/:title' do
  movie = Movie.find_by(name: params[:title])
  search = 0
  if movie == nil
    @title = params[:title]
    @img = HTTParty.get("http://omdbapi.com/?t=#{@title}&apikey=2f6435d9").parsed_response['Poster']
    movie = Movie.new
    movie.name = @title
    movie.image_url = @img
    movie.search_count = 1
    movie.save

  else
    @title = movie.name
    @img = movie.image_url
    search = movie.search_count
  end
  search += 1
  movie = Movie.find_by(name: params[:title])
  movie.search_count =  search

  movie.save
  @search_count = search

  # binding.pry
  erb :movie_details

end
