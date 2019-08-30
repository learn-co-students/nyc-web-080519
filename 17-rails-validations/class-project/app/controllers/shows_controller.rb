class ShowsController < ApplicationController
  
  def new
    @show = Show.new
    @carnivals = Carnival.all 
    @clowns = Clown.all
    @days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  end

  def show 
  end

 
  def create 
    @show = Show.new(show_params)
    if @show.valid?
      @show.save
      redirect_to show_path(@show)
    else
      @carnivals = Carnival.all 
      @clowns = Clown.all
      @days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
      flash.now[:message] = @show.errors.full_messages[0]
      render :new
    end
  end

  def edit
  end

  private 

  def show_params 
    params.require(:show).permit(:day, :carnival_id, :clown_id)

  end
end
