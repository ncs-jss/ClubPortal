class EventMailer < ApplicationMailer
	def on_successful_submission(student, event)
		@student = student
		@event   = event
		mail(to: student.email, subject: 'Successful submission')
	end

	def on_winning(student, event)
		@student = student
		mail(to: student.email, subject: 'Congratulations!')
	end

	def end_time_reminder(student, event)
		@student = student
		mail(to: student.email, subject: 'Task is about to end')
	end
end
