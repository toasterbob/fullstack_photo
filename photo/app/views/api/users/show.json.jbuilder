json.extract! @user, :id, :username, :email, :first_name, :last_name,
              :city, :country, :bio, :profile_pic_url, :cover_photo_url
json.followed @user.is_followed_by_current_user(current_user)
