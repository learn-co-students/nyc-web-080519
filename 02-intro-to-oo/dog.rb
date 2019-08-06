require 'pry'

class Dog

  # attr_reader :name
  # attr_writer :name
  attr_accessor(:name, :breed)

  def initialize(name, breed='cute')
    @name = name
    @breed = breed

  end

  # def name
  #   @name
  # end
  #
  # def name=(the_new_name)
  #   @name = the_new_name
  # end

end # end Dog Class


d1 = Dog.new('cookies')
d2 = Dog.new('lyra')
d3 = Dog.new('ruby')
d4 = Dog.new('javascript')



binding.pry
