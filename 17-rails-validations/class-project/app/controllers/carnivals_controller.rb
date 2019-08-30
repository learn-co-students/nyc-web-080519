class CarnivalsController < ApplicationController
  def index
    @carnivals = Carnival.all
  end

  def show
    @carnival = Carnival.find(params[:id])
  end

  def edit
  end

  def new
  end
end
