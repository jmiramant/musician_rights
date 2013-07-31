MusicianRights::Application.routes.draw do
  root :to => "pages#home"
  get '/home' => "pages#home"
  get '/about' => "pages#about"
  get '/members' => "pages#members"
  get '/admin' => "sessions#new"
  get '/donate' => "pages#donate"
  post '/login' => "sessions#create"
  get '/logout' => "sessions#destroy"
  get '/users/panel' => "users#panel"
  resources :users, only: [:new, :create]
  resources :events, only: [:new, :create, :destroy]
end
