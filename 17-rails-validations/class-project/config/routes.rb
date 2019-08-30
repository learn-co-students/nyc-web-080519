Rails.application.routes.draw do
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

# resources :clowns, except: [:index]


# Clown Routes
get "/clowns", to: "clowns#index", as: "clowns" #clowns_path
get "/clowns/new", to: "clowns#new", as: "new_clown"
get "/clowns/:id", to: "clowns#show", as: "clown" #clown_path(@clown)//@clown
get "/clowns/:id/edit", to: "clowns#edit", as: "edit_clown"
post "/clowns", to: "clowns#create"
patch "/clowns/:id", to: "clowns#update"
delete "/clowns/:id", to: "clowns#delete"

#Carnival Routes
get "/carnivals", to: "carnivals#index", as: "carnivals"
get "/carnivals/new", to: "carnivals#new", as: "new_carnival"
get "/carnivals/:id", to: "carnivals#show", as: "carnival"
get "/carnivals/:id/edit", to: "carnivals#edit", as: "edit_carnival"
post "/carnivals", to: "carnivals#create"
patch "/carnivals/:id", to: "carnivals#update"
delete "/carnivals/:id", to: "carnivals#delete"

#Show Routes
get "/shows/new", to: "shows#new", as: "new_show"
get "/shows/:id", to: "shows#show", as: "show"
post "/shows", to: "shows#create"

end
