require 'pry'
class Clown

# clown_attributes ={name: 'doink', teeth: 32 }
  # clown_attributes[:name]
  @@all = []
  attr_reader :name, :teeth, :shoe_size

  def initialize(attributes)
    @name = attributes[:name]
    @teeth = attributes[:teeth]
    @shoe_size = "large"
    @@all << self
  end

  def self.all
    @@all
  end

  # see the CHILDREN i have scared
  def my_scares
    # look though all the nightmares
    my_nightmares = NightmareVisit.all.select do |nv|
      nv.clown == self
    end
    # check the nightmares that I CAUSED and look at the children
    my_nightmares.map do |nightmare|
      nightmare.scared_child.name
    end

    # clown that scared the MOST children


  end



end # Clown class
