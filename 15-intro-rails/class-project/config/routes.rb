Rails.application.routes.draw do
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

# Clown Routes
get "/clowns", to: "clowns#index"
get "/clowns/new", to: "clowns#new"
get "/clowns/:id", to: "clowns#show"
get "/clowns/:id/edit", to: "clowns#edit"

#Carnival Routes

end
