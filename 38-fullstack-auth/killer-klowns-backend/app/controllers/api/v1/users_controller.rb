class Api::V1::UsersController < ApplicationController  
    def create 
        user = User.create(user_params)
        token = JWT.encode({user: user.id}, "killer-klowns")

        render json: {user: user, token: token}
    end


    private
    def user_params
        params.require(:user).permit(:name, :password)
    end
end