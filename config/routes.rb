Rails.application.routes.draw do
  
  scope '/api' do
  	scope '/v1' do
      mount_devise_token_auth_for 'User', at: 'auth'  
      mount_devise_token_auth_for 'Student', at: 'student'

      as :student do
        # Define routes for student within this block.
      end

      resources :design_events
      post '/design_events/:id/submit', to: 'design_events#submit'
    end
  end

  root 'application#angular'
  get "*angular_routes", to: "application#angular"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
