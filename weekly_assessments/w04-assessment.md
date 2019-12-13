## NAME: ____________________ &nbsp; &nbsp; &nbsp; &nbsp; _______ of 16

### Routing

1. You want to implement the following routes:

| METHOD | PATH | PURPOSE |
| ------ | ---------------| --------------------------------- |
| GET | / | Render a file called 'home.ejs' |
| POST | / | Redirect to the GET route /somepath |
| GET | /somepath | Send "hello world" text to the client |

Add to the code below to make each of those routes work as stated (2 points each, 6 points total):

```javascript
var express = require("express");
var app = express();

app.set("view engine", "ejs");

/***************************
YOUR CODE HERE 
***************************/












app.listen(3000);
```

### Knowledge

2. What is an ORM? (1 point)

* a) Object-Reducer Mapping
* b) Obstructed Randomized Memberships
* c) Objective-Relational Manifest
* d) Object-Relational Mapping
* e) None of the Above - Robert Orm is the inventor of SQL

3. What does `module.exports` do? (1 point)

* a) Enables my `node_modules` folder in the root directory
* b) Enables me to include the file in another file via the `require` keyword
* c) Enables Node to read my `index.js` files without explicitly requiring them
* d) Enables the file in question to be used as an ORM
* e) Doesn't actually do anything in the code; it's just commentary to indicate to the developer what the module is for

4. What does SQL stand for? (1 point)

* a) Simulation Quits Looping
* b) Select Query Language
* c) Simultaneous Quantum Leaps
* d) Structured Query Language
* e) Structured Query Loop

5. PostgreSQL is what type of database? (1 point)

* a) Recreational Database
* b) It's an ORM
* c) LINQ (Language Integrated Queries)
* d) Embedded Database
* e) Relational Database


### SQL Comprehension

Use the following SQL table, `books` to answer questions 6 through 10. Ratings pulled from [Goodreads.com](https://www.goodreads.com/shelf/show/classics).

#### SQL Table: books

| id | title | author | rating |
| -- | ------------------ | --------------------- | ----- |
| 1 | Wuthering Heights | Emily Bronte | 3.84 |
| 2 | To Kill A Mockingbird | Harper Lee | 4.27 |
| 3 | 1984 | George Orwell | 4.16 |
| 4 | Animal Farm | George Orwell | 3.90 |
| 5 | Frankenstein | Mary Shelley | 3.77 |
| 6 | The Picture of Dorian Gray | Oscar Wilde | 4.07 |
| 7 | Fahrenheit 451 | Ray Bradbury | 3.98 |
| 8 | The Scarlet Letter | Nathaniel Hawthorne | 3.39 |
| 9 | The Count of Monte Cristo | Alexandre Dumas | 4.23 |
| 10 | Brave New World | Aldous Huxley | 3.98 |


<br>

6. Write a `SELECT` statement that selects all books in the `books` table, but only the columns `title` and `author`. (1 point)
<br><br><br>


7. Write a `SELECT` statement that selects all books with a `rating` higher than 4.00. (1 point)
<br><br><br>


8. Write a `SELECT` statement that selects all columns from all books that were written by George Orwell. (1 point)
<br><br><br>


9. Write a `SELECT` statement that selects all columns in the `books` table, but the results are ordered by the `rating` column, with the highest rating at the top. (1 point)
<br><br><br>


10. Write a `SELECT` statement that selects all columns from the 3 books in this list that are highest rated. (2 points)
<br><br><br>
