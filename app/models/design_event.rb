class DesignEvent < ApplicationRecord

	def increment_submission
		self.increment!(:total_submissions)
		.update_column(:total_submissions, self.total_submissions)
	end
end