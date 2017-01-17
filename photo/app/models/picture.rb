class Picture < ActiveRecord::Base
  validates :photo_url, :user_id, presence: true

  belongs_to :user

end
