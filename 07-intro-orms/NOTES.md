# CRUD REVIEW

## Lecture Purpose
* review object relationships are they work in a database
* review CRUD and how they can be mapped from SQL to Ruby
* demonstrate how we can interact with databases with Ruby
* establish understanding of the ORM pattern
* establish understanding of how an ORM works
* begin thinking about why we want to use ORMs

1. Review Environment
   * Rake
   * Environment File
   * Gemfile / bundler
   * DB connection
   * We're interacting with Ruby and SQL - the labs already did this
2. Object Relational Mappers
   * Model classes should correspond to Tables in our DB
   * instances of classes should correspond to rows
   * columns of tables correspond to attributes
3. Review CRUD
   * For each SQL statement, a Ruby method to fire it!
   * We'll start small, then abstract some of this away tomorrow