require 'pry'

users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

#How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
users['Jonathan'][:twittwer]

#How would you add the number 7 to Erik's favorite numbers?
users['Erik'][:favorite_numbers].push(7)

#How would you add yourself to the users hash?
users['Darryl'] = {
  :twitter => "dddddd",
  :favorite_numbers => [11,23,32]
}

#How would you return the array of Erik's favorite numbers?
users['Erik'][:favorite_numbers]

#How would you return the smallest of Erik's favorite numbers?
users['Erik'][:favorite_numbers].min

#How would you return an array of Anil's favorite numbers that are also even?
users['Anil'][:favorite_numbers].select {|num| num.even?}

#How would you return an array of the favorite numbers common to all users?
fav_nums = []
users.each_value do |user |
  # user[:favorite_numbers]
  fav_nums = fav_nums.push(user[:favorite_numbers])
  # puts user[:favorite_numbers]
end
fav_nums = fav_nums.flatten.uniq


#How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
fav_nums = []
users.each_value do |user |
  # user[:favorite_numbers]
  fav_nums = fav_nums.push(user[:favorite_numbers])
  # puts user[:favorite_numbers]
end
fav_nums = fav_nums.flatten.sort.uniq

binding.pry





puts 'end'
