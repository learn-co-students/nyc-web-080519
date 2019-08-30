Carnival.destroy_all
Clown.destroy_all

carn1 = Carnival.create!(name: "Barnum & Bailey", city: "New York")
Carnival.create!(name: "Ringling Brothers", city: "Atlanta")
Carnival.create!(name: "Cirque du Soleil", city: "Las Vegas")
Carnival.create!(name: "Circus Circus", city: "Las Vegas")
Carnival.create!(name: "Carnival Carnival", city: "Los Angeles")

Clown.create!(name:"PennyWise", age: 200, carnival: carn1)
# Clown.create!(name:"Krusty", age: 35)
# Clown.create!(name:"Joker", age: 43)
# Clown.create!(name:"Albert", age: 15)
# Clown.create!(name:"Ronald", age: 78)
