class Album < ApplicationRecord

  validates :title, :year, :genre, :artist_id, presence: true

  belongs_to :artist
  has_many :songs


end
