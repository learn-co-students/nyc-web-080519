class CreateCarnivals < ActiveRecord::Migration
  def change
    create_table :carnivals do |t|
      t.string :name
      t.string :city
    end
  end
end
