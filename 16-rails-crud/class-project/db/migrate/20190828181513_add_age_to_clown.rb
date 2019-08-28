class AddAgeToClown < ActiveRecord::Migration[5.2]
  def change
    add_column :clowns, :age, :integer
  end
end
