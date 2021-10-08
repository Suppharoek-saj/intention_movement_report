Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  match 'intention_movement_report' ,to: 'intention_movement_report#index' ,via: :get 
end
