# Intro to SQL

## SWBATs

* Explain persistence and the need for using SQL
    * a lot of tables storing data
    * a collection of data
* Define SQL
    * Structured Query Language

* Explain the difference between SQLite3 and SQL
    * SQLite3 - type of DB, RDBMS, relational database management system
        * types of relational databases - MySQL, PostresQL, Oracle
    * NoSQL
        * Mongo - document store
        * Nee04j - graph database
        * Redis - key value store
* Explore provided data through SQLite Browser
* Define CRUD
* Perform CRUD actions on a single table
* Perform CRUD actions across related tables

## What can I do with data?

CREATE
* create

READ
* read
* evaluate
* admire

UPDATE
* update
* manipulate
* aggregate
* transform

DELETE / DESTROY
* delete

CRUD 
* Instagram
    * CREATE - posting a new picture
        * INSERT / CREATE
    * READ - scrolling through my feed
        * SELECT
    * UPDATE - tagging somebody after the fact, editing a comment
        * UPDATE / ALTER
    * DELETE - throwing that pic in the garbage
        * DELETE

## Set Up 

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

## Challenges

1. Write the SQL to return all of the rows in the artists table?

READ
```SQL
SELECT * 
FROM artists;
```

2. Write the SQL to select the artist with the name "Black Sabbath"

READ
```SQL
SELECT artists.name FROM artists WHERE name = "Black Sabbath";

SELECT * FROM artists WHERE name LIKE "%black%";
```

3. Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text

CREATE
```sql
CREATE TABLE fans (
    id INTEGER PRIMARY KEY,
    name TEXT
);
```

4. Write the SQL to alter the fans table to have a artist_id column type integer?

UPDATE
```sql
ALTER TABLE fans
ADD COLUMN artist_id INTEGER;
```

5. Write the SQL to add yourself as a fan of the Black Eyed Peas? ArtistId **169**

CREATE
```sql
INSERT INTO fans (name, artist_id)
VALUES ("Dan", 169);
```

6. Check out the [Faker gem](https://github.com/stympy/faker). `gem install faker`, open up irb, run `require 'faker'` and then generate a fake name for yourself using `Faker::Name.name`. How would you update your name in the fans table to be your new name?

   ```sql

   ```

7. Write the SQL to return fans that are not fans of the black eyed peas.

READ
```sql
SELECT * FROM fans
WHERE artist_id != 169;
```

```sql
SELECT * 
FROM fans
WHERE artist_id IS NOT 169;
```

7a. Write the SQL to change a fan's artis.

UPDATE
dan = 1
```sql
 UPDATE fans 
 SET artist_id = 6 
 WHERE id = 1;
```

READ
8. Write the SQL to display an artists name next to their album title

```sql
SELECT albums.title, artists.name
FROM albums
JOIN artists
ON artists.id = albums.artist_id;
```

9. Write the SQL to display artist name, album name and number of tracks on that album

```sql

```

10. Write the SQL to return the name of all of the artists in the 'Pop' Genre

```sql

```

## BONUS (very hard)

11. I want to return the names of the artists and their number of rock tracks
    who play Rock music
    and have move than 30 tracks
    in order of the number of rock tracks that they have
    from greatest to least

```sql

```
