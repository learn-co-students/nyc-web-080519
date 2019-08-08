require 'pry'

class Squirrel
    attr_reader :name

    @@all = []
  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

  ## Squirrel Make a new nest

  ## Squirrel all my nests


  ## Squirrel is forgetful, how many nests do I have?


  ## Squirrel wants to know which trees I have nests in?


end # end Squirrel class
# binding.pry
