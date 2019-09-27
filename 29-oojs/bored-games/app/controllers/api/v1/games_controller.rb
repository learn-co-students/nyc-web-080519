class Api::V1::GamesController < ApplicationController

  def index
    games = Game.all

    render json: games
  end

  def show
    game = Game.find(params[:id])

    render json: {game: GameSerializer.new(game)}
  end

  def create
    game = Game.new(game_params)

    if game.save
      render json: game
    else 
      render json: {errors: game.errors.full_messages}
    end

  end

  def like
    game = Game.find(params[:id])
    game.update(likes: params[:likes])

    render json: game
  end

  def destroy
    game = Game.find(params[:id])
    game.destroy

    render json: {message: "Successfully deleted"}
  end

  private

  def game_params
    params.require(:game).permit(:name, :description, :img_url, :likes)
  end
end
