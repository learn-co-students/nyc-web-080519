class CreateShows < ActiveRecord::Migration[5.2]
  def change
    create_table :shows do |t|
      t.string :day
      t.belongs_to :clown, foreign_key: true
      t.belongs_to :carnival, foreign_key: true

      t.timestamps
    end
  end
end
