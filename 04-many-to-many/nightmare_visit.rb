class NightmareVisit

  @@all = []
  attr_reader :scared_child, :clown

  def initialize(attributes)
    @scared_child = attributes[:scared_child]
    @clown = attributes[:clown]
    @@all << self
  end

  def self.all
    @@all
  end

end
