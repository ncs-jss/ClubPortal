class CreateSubmissions < ActiveRecord::Migration[5.0]
  def change
    create_table :submissions do |t|
    end
    add_reference :submissions, :design_event, foreign_key: true
  end
end
