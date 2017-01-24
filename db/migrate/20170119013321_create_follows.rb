class CreateFollows < ActiveRecord::Migration
  def change
    create_table :follows do |t|
      t.integer :following_id, null: false
      t.integer :follower_id, null: false
      t.timestamps null: false
    end
  end
end
