
class Song < ApplicationRecord

  validates :name, :artist_id, :album_ids, presence: true

  belongs_to :artist
  belongs_to :album


end
