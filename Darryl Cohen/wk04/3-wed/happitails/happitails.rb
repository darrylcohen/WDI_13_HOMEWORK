require_relative 'Animal'
require_relative 'Client'
require_relative 'Shelter'
require 'pry'

def create_animal
  print "Enter Animal name : "
  name = gets.chomp
  print "Enter the animal age : "
  age = gets.chomp
  print "Enter the animal gender : "
  gender = gets.chomp
  print "Enter the animal species : "
  species = gets.chomp

  return Animal.new name, age, gender, species
end

def create_client
  print "Enter Client name : "
  name = gets.chomp
  print "Enter number of children : "
  num_children = gets.chomp
  print "Enter the client age : "
  age = gets.chomp

  return Client.new name, num_children, age
end

def list_menu
  puts "\n1: Display all Animals"
  puts "2: Display all Clients"
  puts "3: Create an Animal"
  puts "4: Create a Client"
  puts "5: Adopt an Animal"
  puts "6: Return an Animal"
  puts "7: Instant Data"
  puts "8: Exit"

end

def adopt_animal a_shelter
  print "Enter the Client Name : "
  client_name = gets.chomp
  print "Enter the Animal Name : "
  animal_name = gets.chomp

  a_shelter.adopt_animal client_name, animal_name
end

def return_animal a_shelter
  print "Enter the Client Name : "
  client_name = gets.chomp
  print "Enter the Animal Name : "
  animal_name = gets.chomp

  a_shelter.return_animal client_name, animal_name
end

def instant_data a_shelter
  a_shelter.add_animal Animal.new 'Fluffy', 2, 'male', 'dog'
  a_shelter.add_animal Animal.new 'Rusty', 5, 'male', 'dog'
  a_shelter.add_animal Animal.new 'Felix', 7, 'male', 'cat'
  a_shelter.add_animal Animal.new 'Tweety', 2, 'male', 'bird'

  a_shelter.add_client Client.new 'Darryl', 3, 48
  a_shelter.add_client Client.new 'Trevor', 1, 20
  a_shelter.add_client Client.new 'Clive', 3, 38
end

def start
  a_shelter = Shelter.new 'HappyTails', '12A/45 Williams Street'
  puts "Welcome to the Animal Shelter\n"

  choice = ''
  while choice != 'exit' do
    list_menu
    print "\nEnter Option : "
    choice = gets.chomp.to_i
    # puts "\n"
    case choice
    when 1
      a_shelter.display_animals
    when 2
      a_shelter.display_clients
    when 3
      a_shelter.add_animal create_animal
    when 4
      a_shelter.add_client create_client
    when 5
      adopt_animal a_shelter
    when 6
      return_animal a_shelter
    when 7
      instant_data a_shelter
    when 8
      choice = 'exit'
    else
      puts "\nEnter correct option"
    end
  end

end

start
