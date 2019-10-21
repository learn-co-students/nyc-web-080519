Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

namespace :api do
  namespace :v1 do
    post '/users', to: "users#create"
    get '/autologin', to: "auth#create"
    post '/login', to:"auth#login"
end
end

end
