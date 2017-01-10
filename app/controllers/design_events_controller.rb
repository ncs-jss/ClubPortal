class DesignEventsController < ApplicationController
	
  before_action :find_event_and_student, only: [:submit]
	
  def create
		event = DesignEvent.new(event_params)
		if event.save
			render json: event.to_json
		else
			render json: event.errors.to_json
		end
	end

  def submit
    submission = Submission.new(design_event: @event, student: Student.last, comment: params[:comment])
    if submission.save
      @event.increment_submission
      render json: submission.to_json
    else
      render json: submission.errors.to_json
    end
  end

  def show
    render json: DesignEvent.find(params[:id])
  end

	private

	def set_params
	  @name        = params[:name]
    @description = params[:description]
    @start_time  = params[:start_time]
    @end_time    = params[:end_time]
	end

	def event_params
	  params.require(:design_event).permit(:name, :description, :start_time, :end_time)
	end
end
