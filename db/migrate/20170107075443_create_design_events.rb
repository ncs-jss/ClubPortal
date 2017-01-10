class CreateDesignEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :design_events do |t|
      t.string :name
      t.string :description
      t.timestamp :start_time
      t.timestamp :end_time
      t.integer :total_submissions, default: 0
      t.timestamps
    end
  end
end
