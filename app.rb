require 'sinatra'
require 'sinatra/activerecord'

set :database, 'postgres://localhost/App' || ENV['DATABASE_URL']

enable :sessions

get '/' do
	erb :index
end