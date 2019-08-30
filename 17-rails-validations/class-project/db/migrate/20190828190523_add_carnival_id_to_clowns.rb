class AddCarnivalIdToClowns < ActiveRecord::Migration[5.2]
  def change
    add_column :clowns, :carnival_id, :integer
  end
end
