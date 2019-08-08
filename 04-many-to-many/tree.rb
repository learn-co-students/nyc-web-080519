require 'pry'

class Tree
    attr_reader :name

    @@all = []
  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end


  ## Tree wants to know all its nests ?

  ## Tree wants to know all of its squirrels?



end # end Tree class
# binding.pry
