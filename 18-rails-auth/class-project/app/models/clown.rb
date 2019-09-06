class Clown < ApplicationRecord
    has_many :shows
    has_many :carnivals, through: :shows
    validates :name, presence: true
    validate :validate_age 

    def validate_age
        if self.age > 40
            errors.add(:age, "get a new hobby")
        end
    end
end
