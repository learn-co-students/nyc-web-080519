class AddAgeToClowns < ActiveRecord::Migration[5.2]
  def change
    add_column :clowns, :age, :string
  end
end
