class Playlist < ApplicationRecord

  validates :title, :user_id, presence: true

  belongs_to :user


end
