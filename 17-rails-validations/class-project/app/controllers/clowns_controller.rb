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
    @clown = Clown.new(clown_params)
    if @clown.valid?
      @clown.save
      shows = params[:clown][:carnivals].map do |carnival_id|
        Show.create(clown_id: @clown.id, carnival_id: carnival_id)
        end
      redirect_to clown_path(@clown)
    else
      flash.now[:messages] = @clown.errors.full_messages[0]
      @carnivals = Carnival.all
      render :new
    end
  end

  private

  def clown_params
    params.require(:clown).permit(:name, :age)
  end


end
