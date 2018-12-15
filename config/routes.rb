Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :albums, only: [:index, :show]
    resources :artists, only: [:index, :show]
    resources :follows, only: [:create, :destroy]
    resources :playlist_songs, only: [:create, :destroy]
    resources :playlists, only: [:index, :new, :show, :create, :update, :destroy]
    resources :search, only: [:index]
    resource :session, only: [:create, :destroy, :show]
    resources :songs, only: [:index]
    resources :user_follows, only: [:index, :create, :destroy]
    resources :users, only: [:index, :create]
  end
end
