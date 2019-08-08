require "pry"
require_relative "./clown"
require_relative "./nightmare_visit"
require_relative "./scared_child"


clown1= Clown.new({name:'bozo', teeth:3})
clown2= Clown.new({name:'penny', teeth:53})
clown3= Clown.new({name:'krusty', teeth:32})
clown4= Clown.new({name:'ronal', teeth:13})
clown5= Clown.new({name:'it', teeth:31})
sc1= ScaredChild.new({name: 'milhouse', age:6})
sc2= ScaredChild.new({name: 'john snow', age:2})
sc3= ScaredChild.new({name: 'shaggy', age:27})
sc4= ScaredChild.new({name: 'bart', age:7})
n1 = NightmareVisit.new({scared_child: sc1, clown: clown3})
n2 = NightmareVisit.new({scared_child: sc1, clown: clown2})
n3 = NightmareVisit.new({scared_child: sc1, clown: clown5})
n4 = NightmareVisit.new({scared_child: sc4, clown: clown2})
n5 = NightmareVisit.new({scared_child: sc3, clown: clown2})
n6 = NightmareVisit.new({scared_child: sc3, clown: clown1})


binding.pry
