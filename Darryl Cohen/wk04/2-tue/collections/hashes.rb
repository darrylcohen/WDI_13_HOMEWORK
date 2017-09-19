require 'pry'

ninja_turtle = {
  name: 'Michaelangelo',
  weapon: 'Nunchuks',
  radical: true
}

ninja_turtle[:age] = 25

ninja_turtle.delete(:radical)

ninja_turtle[:pizza_toppings] = ["cheese", "pepperoni", "peppers"]

puts ninja_turtle[:pizza_toppings][0]

keys = ninja_turtle.keys

ninja_turtle.each_pair do |key,value|
  puts "#{key} is equal to #{value}"
end

binding.pry

puts 'end'
