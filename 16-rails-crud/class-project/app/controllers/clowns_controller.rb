class ClownsController < ApplicationController
  def index
    @clowns = Clown.all
  end

  def show
    @clown = Clown.find(params[:id])
  end

  def edit
    @clown = Clown.find(params[:id])
  end

  def new
    @clown = Clown.new
    @carnivals = Carnival.all
  end

  def create
    clown = Clown.create(clown_params)
    byebug
    # "/clowns/:id"
    #  clown_path(clown)
     redirect_to clown_path(clown)
  end

  private

  def clown_params
    params.require(:clown).permit(:name, :age, :carnival_id)
  end


end
