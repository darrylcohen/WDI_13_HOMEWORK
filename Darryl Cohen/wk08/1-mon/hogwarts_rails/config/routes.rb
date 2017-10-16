# Hogwarts::Application.routes.draw do
Rails.application.routes.draw do
  resources :houses, only: [:index, :show]
  resources :students, only: [:index, :show, :new]
  root 'houses#index'

end
