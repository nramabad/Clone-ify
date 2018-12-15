
class Song < ApplicationRecord

  validates :name, :album_ids, presence: true

  belongs_to :album


end
