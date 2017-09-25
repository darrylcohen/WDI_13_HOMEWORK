require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require_relative 'Animal'
require_relative 'Client'
require_relative 'Shelter'

a_shelter = Shelter.new 'Happytails', '12A/45 Williams Street'

get '/' do

  erb :index
end

get '/display_animals' do
  @animals = a_shelter.get_animals

  erb :animals
end

get '/add_animal' do
  name = params[:name]
  age = params[:age]
  gender = params[:gender]
  species = params[:species]

  a_shelter.add_animal Animal.new name, age, gender, species
  @animals = a_shelter.get_animals
  erb :animals
end

get '/display_clients' do
  @clients = a_shelter.get_clients

  erb :clients
end

get '/add_client' do
  name = params[:name]
  children = params[:children]
  age = params[:age]

  a_shelter.add_client Client.new name, children, age
  @clients = a_shelter.get_clients
  erb :clients
end

get '/adopt' do
  animal = params[:animal_name]
  client = params[:client_name]

  a_shelter.adopt_animal client, animal
  @animals = a_shelter.get_animals
  @clients = a_shelter.get_clients

  erb :adopt
end

get '/return' do
  animal = params[:animal_name]
  client = params[:client_name]

  a_shelter.return_animal client, animal
  @animals = a_shelter.get_animals
  @clients = a_shelter.get_clients

  erb :returnh
end
