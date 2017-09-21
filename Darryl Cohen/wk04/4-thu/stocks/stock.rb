require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'yahoofinance'

get '/' do
  erb :index
end

get '/get_stock' do
  @stock = params[:stock]
  result = YahooFinance::get_quotes(YahooFinance::StandardQuote, @stock)
  @last_price = result[@stock].lastTrade
  @day_range = result[@stock].dayRange
  
  erb :display_stock
end
