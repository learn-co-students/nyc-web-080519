# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

data = [
  {
    "name": "Settlers of Catan",
    "description": "Friendships will be tested.",
    "img_url": "https://crowscastle.com/375-large_default/the-settlers-of-catan.jpg",
    likes: 0
  },
  {
    "name": "Azul",
    "description": "Great fun with the friends!.",
    "img_url": "https://cf.geekdo-images.com/itemrep/img/ql-0-t271LVGqbmWA1gdkIH7WvM=/fit-in/246x300/pic3718275.jpg",
    likes: 0
  },
  {
    "name": "Talisman",
    "description": "It's really metal",
    "img_url": "https://www.games-workshop.com/resources/img/cmp/talisman/Talisman_Box_Front.jpg",
    likes: 0
  },
  {
    "name": "Small World",
    "description": "So not metal",
    "img_url": "https://i5.walmartimages.com/asr/c449c6ec-cae1-4b3c-8010-f74390d56abd_1.9d0a7645e3cd8d776b8a1396f03b524b.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    likes: 0
  }
]

data.each do |game|
  Game.create(game)
end