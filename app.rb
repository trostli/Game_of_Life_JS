require 'sinatra'
require 'sinatra/activerecord'

set :database, ENV['DATABASE_URL'] || 'postgres://localhost/App'

get '/' do
	erb :index
end