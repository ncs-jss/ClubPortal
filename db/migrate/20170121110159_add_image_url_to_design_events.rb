class AddImageUrlToDesignEvents < ActiveRecord::Migration[5.0]
  def change
    add_column :design_events, :image_url, :string
  end
end
