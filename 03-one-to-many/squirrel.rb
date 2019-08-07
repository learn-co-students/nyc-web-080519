require 'pry'
class Squirrel

  attr_reader :name

  @@all_squirrels = []

  def initialize(name)
    @name = name
    @@all_squirrels << self
  end

  def eat
    puts "#{self.name} is eating some food"
  end

  def self.all
    @@all_squirrels
  end


end # end Squirrel class

s1 = Squirrel.new('alvin')
s2 = Squirrel.new('simon')
s3 = Squirrel.new('theodore')

binding.pry

s1.eat
