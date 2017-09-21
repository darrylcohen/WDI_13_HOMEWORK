require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'yahoofinance'

require 'httparty'

results = HTTParty.get('http://api.fixer.io/latest')
binding.pry
