require 'sinatra'
require 'sinatra/activerecord'

set :database, ENV['DATABASE_URL'] || 'postgres://localhost/App'

enable :sessions

get '/' do
	erb :index
end