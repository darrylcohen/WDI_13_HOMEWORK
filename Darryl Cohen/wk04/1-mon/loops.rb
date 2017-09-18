number = rand(1..10)

puts 'Guess a Number'
guess = gets.chomp.to_i

while number != guess do
  if guess < number
    puts 'Guess Higher'
  else
    puts 'Guess Lower'
  end


  puts 'Guess a Number'
  guess = gets.chomp.to_i
end

puts "The number was : #{number}"
