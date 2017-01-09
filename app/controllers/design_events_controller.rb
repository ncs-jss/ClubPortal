class DesignEventsController < ApplicationController
	
	def create
		event = DesignEvent.new(event_params)

		if event.save
			render json: event.to_json
		else
			render json: event.errors.to_json
		end
	end

  def update
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
