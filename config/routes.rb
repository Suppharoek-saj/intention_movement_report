Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  match 'intention_movement_report/daily' ,to: 'intention_movement_report#index' ,via: :get 
  match 'intention_movement_report/monthly' ,to: 'intention_movement_report#monthly' ,via: :get 
  match 'intention_movement_report/yearly' ,to: 'intention_movement_report#yearly' ,via: :get 
end
