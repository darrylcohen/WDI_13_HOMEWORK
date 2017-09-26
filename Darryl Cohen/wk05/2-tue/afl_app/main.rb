require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'pg'

def run_db(sql)
  conn = PG.connect({dbname: 'afl_db'})
  conn.exec(sql)
end

# Landing Page
get '/' do
  erb :index
end


# Showing all the teams
get '/teams' do
  # Teams is number of rows returned
  @teams = run_db ('SELECT * FROM teams;')
  erb :teams
end

# When edit link clicked
get '/teams/:id/edit' do
  sql = "SELECT * FROM teams WHERE id=#{params[:id]};"
  @team = run_db(sql).first
  erb :edit
end

# ============ NEW ==============
# When new button clicked
get '/teams/new' do
  erb :new
end

# When new info created
post '/teams' do
  sql = "INSERT INTO teams (name, image_url)
  VALUES('#{params[:name]}', '#{params[:image_url]}');"
  run_db(sql)
  redirect '/teams'
end

# ============ READ ==============
# Requesting the details of 1 team
get '/teams/:id' do
  sql = "SELECT * FROM teams WHERE id=#{params[:id]};"
  @team = run_db(sql).first
  erb :show
end

# ============ DELETE ==============
delete '/teams/:id' do
  sql= "DELETE FROM teams WHERE id = #{params[:id]};"
  run_db(sql)
  redirect '/teams'
end

# ============ UPDATE ==============
put '/teams/:id' do
  sql = "UPDATE teams SET name='#{params[:name]}', image_url='#{params[:image_url]}'
  WHERE id = #{params[:id]}"
  run_db(sql)
  redirect "/teams"
end
