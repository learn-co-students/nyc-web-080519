class Food < ActiveRecord::Base

  belongs_to :feral_cat
  belongs_to :nice_person

end
