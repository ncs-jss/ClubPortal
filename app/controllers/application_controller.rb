class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken

  def angular
    render :file => 'public/views/index.html'
  end

  def find_event_and_student
    @event    = DesignEvent.find(params[:id])
    @student  = current_student
  end
end
