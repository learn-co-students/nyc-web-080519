class NicePerson < ActiveRecord::Base

  has_many :foods
  has_many :feral_cats, through: :foods

end
