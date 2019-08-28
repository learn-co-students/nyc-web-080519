class ClownsController < ApplicationController
  def index
    @clowns = Clown.all
  end

  def show
    @clown = Clown.find(params[:id])
  end

  def edit
  end

  def new
  end

end
