class ChangeUsersOptOutType < ActiveRecord::Migration
  def change
    change_column :users, :opt_out, :boolean, :default => false
  end
end
