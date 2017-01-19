class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :pictures

  has_many :follower_associations,
  foreign_key: :following_id,
  class_name: "Follow"

  has_many :followers,
  through: :follower_associations,
  source: :follower

  has_many :following_associations,
  foreign_key: :followed_id,
  class_name: "Follow"

  has_many :followings,
  through: :following_associations,
  source: :following


  attr_reader :password
  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def password= (password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = SecureRandom.urlsafe_base64(128)
    end
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64(128)
    ensure_session_token_uniqueness
    self.save!
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(128)
  end


end
