require 'pry'

planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]

puts planeteers[1]

planeteers.push('Heart')

planeteers1 = planeteers - [planeteers[2]] # ?????

rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]
heroes = planeteers.concat(rangers)

heroes = heroes.sort
heroes = heroes.shuffle

element = heroes.sample

b_heroes = heroes.select do |hero|
  hero[0] == 'B'
end

binding.pry

puts 'end'
