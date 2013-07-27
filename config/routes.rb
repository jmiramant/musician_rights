MusicianRights::Application.routes.draw do
  root :to => "pages#home"
  get '/home' => "pages#home"
  get '/about' => "pages#about"
  get '/admin' => "sessions#new"
  post '/login' => "sessions#create"
  get '/logout' => "sessions#destroy"
  resources :users, only: [:new, :create]
  resources :events, only: [:new, :create]
end
