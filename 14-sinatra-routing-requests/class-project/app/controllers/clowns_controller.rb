class ClownsController < ApplicationController
    # index action
  get "/clowns" do 
    @clowns = Clown.all
    erb :"clowns/index" 
  end

  # new action 
  get "/clowns/new" do 
    erb :"clowns/new"
  end

  #show action
  get "/clowns/:id" do
    @clown = Clown.find(params[:id])
    erb :"clowns/show"
  end

  # create action
  post "/clowns" do
    clown = Clown.create(name: params[:name])
    redirect "/clowns/#{clown.id}"
  end

  # edit action
  get "/clowns/:id/edit" do
    @clown = Clown.find(params[:id])
    erb :"clowns/edit"
  end

  # update action
  patch "/clowns/:id" do
    clown = Clown.find(params[:id])
    clown.update(params[:clown])
    redirect "clowns/#{clown.id}"
  end






end