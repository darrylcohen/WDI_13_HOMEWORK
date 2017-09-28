require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'movies_db'
}

ActiveRecord::Base.establish_connection(options)
