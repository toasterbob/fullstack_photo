class CreatePictures < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
      t.string :photo_url, null: false
      t.integer :user_id, null: false
      t.text :description
      t.timestamps null: false
    end
    add_index :pictures, :user_id 
  end
end
