Rails.application.routes.draw do
  root 'comics#home'
  get 'comics/home'
  get 'comics/recent'
  get 'comics/favorite'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
