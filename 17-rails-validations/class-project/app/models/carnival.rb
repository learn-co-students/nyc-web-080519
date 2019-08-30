class Carnival < ApplicationRecord
    has_many :shows
    has_many :clowns, through: :shows
end
