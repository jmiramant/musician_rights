class AddFieldsToUsersTable < ActiveRecord::Migration
  def change
    add_column :users, :zipcode, :integer
    add_column :users, :band, :string
  end
end
