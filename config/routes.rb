MusicianRights::Application.routes.draw do
  root :to => "pages#home"
  get '/home' => "pages#home"
  get '/about' => "pages#about"
  resources :users, only: [:new, :create]
  resources :events, only: [:new, :create]
end
