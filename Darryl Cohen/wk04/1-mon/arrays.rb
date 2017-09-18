require 'pry'

days_of_week = ['Monday','Tueday','Wednesday','Thursday','Friday','Saturday','Sunday']

days_of_week.unshift(days_of_week.pop());

puts days_of_week

days_of_week.push days_of_week.shift

weekdays = days_of_week.slice(0,5)
weekends = days_of_week.slice(5,7)

days_of_week2 = [weekdays, weekends]

puts "Days of Week #{days_of_week2}"

week_ends = days_of_week2.pop

puts "Sorted Weekdays #{weekdays.sort}"

binding pry

puts 'end'
