Rails.application.routes.draw do
  resources :comments
  root 'dishes#index'
  resources :dishes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
