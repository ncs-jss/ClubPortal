Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  mount_devise_token_auth_for 'Student', at: 'student'
  as :student do
    # Define routes for student within this block.
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
