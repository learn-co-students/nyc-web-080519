## Intro to ORM

## SWBATs

* Follow code that is organized into different files
* Define Object Relational Mapper (ORM)
* Explain how the `sqlite` gem works as a driver or wrapper around SQL
* Implement HEREDOCs to be saved in variables to be executed by SQL driver
* Perform persistent CRUD actions on a model
* Distinguish between ORM and SQL
* Demonstrate that ORMs are the pattern connecting scripting languages and databases
* Explain to a peer all the things that happen when we call `Tweet.all` (your answer should include when SQL is fired & when Ruby objects are created)

## Object Relational Mapper (ORM)

* Pattern:
    - convert ruby objects into database things
    - ruby classes are represented in the DB as a table
    - ruby instances are represented as rows in the table
    - attributes of ruby objects are represented as table columns


+ Definition:



## Domain Modeling and SQL Review

Draw out what your schema (structure of your tables and columns) would be for the following domains. Consider what tables are needed, what columns belong on which tables, and where the foreign keys belong.

1. Books and Authors where each book has a single author. Books should have a title and authors should have a name

### Books
| id  | title                | page_count | author_id |
| --- | ------------------- | ---------- | --------- |
| 1   | The Wheel of Time    | 1000       | 1         |
| 2   | The Knife Something  | 1000       | 1         |
| 3   | Ender's Game         | 263        | 2         |
| 4   | The Name of the Wind | 500        | 3         |



### Authors
id | name  
--- | ---            
1  | Robert Jordan     
2  | Orseon Scott Card 
3  | Patrick Rothfuss
4  | Stephen King


Q: Write the SQL to find all books written by a certain author given the author's id.

```sql
SELECT * 
FROM books
WHERE author_id = 1;
```

Q: Write the SQL to find all books written by a certain author given the author's name.

```sql
SELECT *
FROM books
JOIN authors
ON books.author_id = authors.id
WHERE authors.name = "Orseon Scott Card";
```

2. Books and Authors where each book can have one or multiple authors. Books should have a title and authors should have a name

### Authors
id | name   
--- | ---           
1  | Robert Jordan     
2  | Orseon Scott Card 
3  | Patrick Rothfuss
4  | Stephen King
5  | Terry Pratchet
6  | Neil Gaiman

### Books
id | title                | page_count 
--- | --- | ---
1  | The Wheel of Time    | 1000       
2  | The Knife Something  | 1000       
3  | Ender's Game         | 263        
4  | The Name of the Wind | 500        
5  | Good Omens           | 300        


### Book_authors
id | author_id | book_id
--- | --- | ---
1  | 1         | 1
2  | 5         | 5
3  | 6         | 5
4  | 2         | 3
5  | 3         | 4
6  | 1         | 2



Q: Write the SQL to find all books written by a certain author given their name
author = Robert Jordan

```sql
SELECT * 
FROM books
JOIN book_authors
ON books.id = book_authors.book_id
JOIN authors
ON book_authors.author_id = authors.id
WHERE authors.name = "Robert Jordan";
```


3. Twitter where Tweets can have Tags (i.e. '#fun', '#learnlovecode', '#tbt'). A tweet can have multiple tags, many tweets can be tagged with the same tag. Tweets have a message and user_id; tags have a name.


Q: Write the SQL to find all the tweets tagged '#tbt'


4. After completing the questions above, is there a rule you can determine about which table the foreign key belongs on given two associated tables?

    - child table => we want the foreign key to be on the belongs_to table (e.g., the books table)

# CRUD REVIEW
What are the four ways we can interact with data?

* Create  
SQL: `INSERT INTO books (title, page_count) VALUES ("Harry Potter", 399)`    
Ruby: `Book.new("Harry Potter", 399)`


* Read  
SQL: `SELECT * FROM books;`   
Ruby: `Book.all`


* Update  
SQL: `UPDATE books SET page_count = 300 WHERE title = "Harry Potter";`   
Ruby: `harry_potter.page_count = 300`


* Destroy  
SQL: `DELETE FROM books WHERE title = "Harry Potter";`   
Ruby: `harry_potter.delete`



## Lecture Notes

### What does an ORM do?
* provides a Ruby interface to our database 
* it connects our Ruby models/attributes/instances to tables/columns/rows in the database
* it translates data from database into Ruby objects

### How does it help us?
* scripting with Ruby
* more concise to call "Tweet.all" than to write out entire SQL query
* puts everything in a single language
* why else??