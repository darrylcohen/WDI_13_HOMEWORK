class Dish < ApplicationRecord
  has_many :comments
  belongs_to :venue
end
