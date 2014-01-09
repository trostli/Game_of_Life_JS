require 'sinatra'
require 'sinatra/activerecord'

get '/' do
	erb :index
end