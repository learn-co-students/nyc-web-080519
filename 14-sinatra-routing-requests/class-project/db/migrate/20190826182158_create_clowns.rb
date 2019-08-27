class CreateClowns < ActiveRecord::Migration
  def change
    create_table :clowns do |t|
      t.string :name
    end
  end
end
