class Submission < ApplicationRecord
	belongs_to :student
	belongs_to :design_event
end