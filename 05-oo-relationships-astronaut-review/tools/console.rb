require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

buzz = Astronaut.new("Buzz Lightyear", 45, "Ranger")
gennady = Astronaut.new("Gennady Padalka", 61, "Pilot")
peggy = Astronaut.new("Peggy Whitson", 59, "Biochemist")
yuri = Astronaut.new("Yuri Gagarin", 34, "Cosmonaut")
alyssa = Astronaut.new("Alyssa Carson", 18, "Astronaut in Training")

columbia = Shuttle.new("OV-102", 4)
discovery = Shuttle.new("OV-103", 5)
endeavor = Shuttle.new("OV-105", 8)
dragon = Shuttle.new("Space X", 7)

m1 = Mission.new(1981, peggy, columbia)
m2 = Mission.new(1981, yuri, columbia)
m3 = Mission.new(1981, gennady, columbia)
m4 = Mission.new(2023, alyssa, dragon)
m5 = Mission.new(1984, buzz, discovery)
m6 = Mission.new(1984, yuri, discovery)
m7 = Mission.new(1984, gennady, discovery)
m8 = Mission.new(1992, peggy, endeavor)
m9 = Mission.new(1992, buzz, endeavor)
m10 = Mission.new(1992, yuri, endeavor)
m11 = Mission.new(2023, buzz, dragon)
m12 = Mission.new(2023, yuri, dragon)


binding.pry

puts "Let's go to space!" # just in case pry is buggy and exits
