
class Song < ApplicationRecord

  validates :title, :duration, :album_id, presence: true

  belongs_to :album
  has_one :artist, through: :album, source: :artist
  has_many :playlist_songs
  has_many :playlists, through: :playlist_songs
  has_one_attached :audio
  has_one :cover, through: :album

end
