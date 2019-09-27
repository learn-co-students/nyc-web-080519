Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :games # builds all the seven restful (deadly) routes

      patch "/games/:id/like", to: "games#like"
    end
  end

  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
