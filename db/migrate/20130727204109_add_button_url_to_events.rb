class AddButtonUrlToEvents < ActiveRecord::Migration
  def change
    add_column :events, :button_url, :string
  end
end
