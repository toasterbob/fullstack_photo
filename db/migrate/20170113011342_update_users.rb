class UpdateUsers < ActiveRecord::Migration
  def change
    add_column :users, :email, :string, unique: true
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :city, :string
    add_column :users, :country, :string
    add_column :users, :bio, :text
    add_column :users, :profile_pic_url, :string
    add_column :users, :cover_photo_url, :string
  end
end
