class Playlist < ApplicationRecord

  validates :title, :user_id, presence: true

  belongs_to :user
  has_many :playlist_songs
  has_many :songs, through: :playlist_songs, source: :song
  has_many :artists, through: :songs, source: :artist
  has_many :albums, through: :songs, source: :album


end
