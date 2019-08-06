require 'pry'


class Dog

  attr_reader :breed
  attr_accessor :name

  def initialize(name, breed)
    @name = name
    @breed = breed
  end

  # attr_reader :breed
  # def breed
  #   @breed
  # end

  # attr_accessor :name
  # def name
  #   @name
  # end
  #
  # def name=(new_name)
  #   @name = new_name
  # end

end # end Dog class

fido = Dog.new('princess fluffy acorn', 'lab')
binding.pry
