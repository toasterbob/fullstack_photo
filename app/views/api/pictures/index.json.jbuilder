json.array! @pictures.reverse do |picture|
  json.extract! picture, :photo_url, :description, :user_id
  json.username picture.user.username
  json.profile_pic_url picture.user.profile_pic_url
end
