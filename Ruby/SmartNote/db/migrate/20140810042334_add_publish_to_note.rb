class AddPublishToNote < ActiveRecord::Migration
  def change
    add_column :notes, :publish, :boolean, default: false
  end
end
