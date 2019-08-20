class Cat < Animal
  include Mammal
  extend Mammal

  attr_reader :claws
  # attr_accessor :mood

  # overwrite
  # lookup chain - where does an object find its methods
  def initialize(name, mood = 'nervous', claws = true)
    super(name, mood)
    @claws = claws
  end

  def speak
    super
    puts 'moow'
  end

end
