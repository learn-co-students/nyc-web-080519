class CarnivalsController < ApplicationController
    
  # carnival's index action
  get "/carnivals" do
    @carnivals = Carnival.all 
    erb :"carnivals/index"
  end

  # carnival's show action
  get "/carnivals/:id" do
    @carnival = Carnival.find(params[:id])
    erb :"carnivals/show"
  end


end