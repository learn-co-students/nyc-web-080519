class FeralCat < ActiveRecord::Base

  has_many :foods
  has_many :nice_people, through: :foods


end
