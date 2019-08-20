class Animal
  attr_reader :name
  attr_accessor :mood

  def initialize(name, mood = 'nervous')
    # binding.pry
    @name = name
    @mood = mood
  end

  def speak
    puts 'yo'
  end

  # def initialize(params = {})
  #   @name = params['name']
  #   @mood = params['mood']
  # end
end