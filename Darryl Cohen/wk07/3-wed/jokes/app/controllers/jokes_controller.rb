class JokesController < ApplicationController

  def home

  end

  def index
    response = HTTParty.get("http://api.icndb.com/jokes/random").parsed_response
    @joke = response["value"]["joke"]
  end
end
