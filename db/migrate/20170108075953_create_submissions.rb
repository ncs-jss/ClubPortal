class CreateSubmissions < ActiveRecord::Migration[5.0]
  def change
    create_table :submissions do |t|
    	t.string :comment
    end
    add_reference :submissions, :design_event, foreign_key: true
    add_reference :submissions, :students, foreign_key: true 
  end
end
