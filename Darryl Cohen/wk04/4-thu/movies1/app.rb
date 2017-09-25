require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
  erb :index
end

def save_to_file search
  File.open('moiveSearch.txt', 'a+') { |f|
    f.puts search.upcase
  }
end

get '/about' do
  @movie = params[:movie]

  save_to_file @movie

  @result = HTTParty.get("http://omdbapi.com/?s=#{@movie}&apikey=2f6435d9").parsed_response['Search']
  if @result == nil
    redirect '/'
  elsif @result.length == 1
    redirect "/movie_details?title=#{@result[0]['Title']}"
  else
    erb :about
  end

  # erb :about
end

get '/movie_details' do
  @title = params[:title]

  @img = HTTParty.get("http://omdbapi.com/?t=#{@title}&apikey=2f6435d9").parsed_response['Poster']

  erb :movie_details

end

get '/history' do
  # @file = 'moiveSearch.txt'
  @fileDetails = []

  File.open("moiveSearch.txt", "r") do |f|
    f.each_line do |line|
      @fileDetails.push(line)
    end
  end
  erb :history
end
