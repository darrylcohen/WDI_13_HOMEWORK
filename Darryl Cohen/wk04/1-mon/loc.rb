require 'pry'
require 'fileutils'

counter = 0
puts 'Enter aa file name'
file = gets.chomp

file = File.new(file, "r")

while (line = file.gets) do
  counter = counter + 1
end

puts "#{counter} number of lines"
