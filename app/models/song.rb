
class Song < ApplicationRecord

  validates :name, :album_id, presence: true

  belongs_to :album
  has_one :artist, through: :album, source: :artist
  has_many :playlist_songs
  has_many :playlists, through: :playlist_songs
  has_one_attached :audio

end
