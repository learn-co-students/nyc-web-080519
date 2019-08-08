class ScaredChild

  @@all = []
  attr_reader :name, :age

  def initialize(args)
    @name = args[:name]
    @age = args[:age]
    @@all << self
  end

  def self.all
    @@all
  end

  # total number of teeth of all the clowns that SCARED ME
    # class? instance 💪
    # figure out the method name
    # WHAT info do i need to sort through
    # which iterator makes the most sense
    # is the return value meeting the deliverable



end
