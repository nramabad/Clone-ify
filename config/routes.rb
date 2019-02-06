Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :albums, only: [:index, :show] do
      collection do
        get :search
      end
    end
    resources :artists, only: [:index, :show] do
      collection do
        get :search
      end
    end
    resources :follows, only: [:create, :destroy]
    resources :playlist_songs, only: [:create, :destroy]
    resources :playlists do
      collection do
        get :search
      end
    end
    resource :session, only: [:create, :destroy, :show]
    resources :songs, only: [:index, :show] do
      collection do
        get :search
      end
    end
    resources :user_follows, only: [:index, :create, :destroy]
    resources :users, only: [:index, :show, :create] do
      collection do
        get :search
      end
    end
  end
end
