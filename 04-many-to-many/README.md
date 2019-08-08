# ruby-many-to-many-relationships

## SWBAT

* Implement both sides of a many to many relationships
* Practice keeping groups of data related to classes on the class as a class variable
* Demonstrate single source of truth by not storing collections of objects on other objects
* Demonstrate single source of truth by not storing one object in multiple collections



### One to many
<!-- belongs_to generally means should be initialized with other model -->
* Book belongs_to Author
* Author has_many books
```ruby
class Book

def initialize(author)
  @author = author
end
```

### Many to Many
* Project can have many backers
* Backer can back many projects

* Parents can have many Children
* Children can have many parents

* Citi bikes has many Rider
* Rider can ride many Citi bikes

* Ballers can play many games
* Games can be played by many ballers

* Clowns and Scared Children :) 🙈😈🤡


* Squirrels can have many Trees
* Trees can have many Squirrels
* Squirrel has_many Nests
* Nest belongs_to Squirrel
