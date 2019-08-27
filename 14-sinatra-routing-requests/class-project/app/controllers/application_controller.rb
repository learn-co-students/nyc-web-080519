require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

  get "/hello_world" do
    erb :helloWorld
  end

  # index action
  get "/clowns" do 
    @clowns = Clown.all
    erb :index 
  end

  #show action
  get "/clowns/:id" do
    @clown = Clown.find(params[:id])
    erb :show
  end

end
