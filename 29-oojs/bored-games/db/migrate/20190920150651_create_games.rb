class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :name
      t.string :description
      t.string :img_url
      t.integer :likes

      t.timestamps
    end
  end
end
