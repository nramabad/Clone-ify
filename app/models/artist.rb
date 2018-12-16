class Artist < ApplicationRecord

  validates :name, presence: true

  has_many :songs, through: :albums, source: :songs
  has_many :albums


end 
