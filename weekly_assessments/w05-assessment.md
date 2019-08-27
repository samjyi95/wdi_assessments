## NAME: ____________________ &nbsp; &nbsp; &nbsp; &nbsp; _______ of 16

### SQL Relationships

You're building an online store and need to track customer orders. You know orders and customers are related, and you will need to be able to track which customer an order belongs to. You can assume your table schemas look like this:

#### Customers

| Column Name | Data Type |
| ----------- | --------- |
| id | integer |
| createdAt | date |
| updatedAt | date |
| firstname | string |
| lastname | string |
| address | string |
| city | string |
| state | string |
| zip | string |

#### Orders

| Column Name | Data Type |
| ----------- | --------- |
| id | integer |
| createdAt | date |
| updatedAt | date |
| total | numeric |
| customerId | integer |

<br><br>

1. What kind of relationship do Customers and Orders have? (1 point)

* a) One-to-one 
* b) One-to-Many
* c) Many-to-Many
* d) They are related only by a union
* e) None; they are separate tables

<br>

2. What is true about the `customerId` field in the `Orders` table? (1 point)

* a) It is a primary key
* b) It is a foreign key
* c) It is an floating point value
* d) It is always null
* e) It must be the last column in the table

<br>

3. What is true about the `id` field in the `Customers` table? (1 point)

* a) It is a primary key
* b) It is a foreign key
* c) It is an floating point value
* d) It is always null
* e) It must be the first column in the table

<br>

4. Foreign keys.... (1 point)

* a) Can't be accessed directly
* b) Are always strings
* c) Correspond to a primary key of another table
* d) Are assigned the value '1' by default
* e) Can only be used in Canada

<br>

5. One-to-Many is often abbreviated 1:M. Many-to-Many is often abbreviated as: (1 point)

* a) N:M
* b) M:1
* c) P:Q
* d) XXX:YYY
* e) None of the above

<br>

6. A good example of a One-to-One relationship between 2 SQL tables is: (1 point)

* a) Doctors and Patients
* b) Phones and Manufacturers
* c) Authors and Books
* d) Users and User Profiles
* e) This isn't a real kind of relationship

<br>

7. Clowns and Birthday Parties are what kind of SQL relationship? (1 point)

* a) One-to-One
* b) One-to-Many
* c) Many-to-Many
* d) BelongsTo/hasMany
* e) None of the Above

<br>

8. Your answer for #7 is justified because... (1 point)

* a) A clown can attend only one birthday party
* b) A clown can attend multiple birthday parties
* c) A birthday party can have multiple clowns
* d) Many-to-Many is a byproduct of our ORM and doesn't have any meaning in raw SQL
* e) Both b and c
* f) None of the above

### Interpretting SQL Statements

Consider the following SQL statement:

```SQL
SELECT 
    CONCAT(c.firstname, ' ', c.lastname) AS 'Full Name',
    c.address AS 'Address Line 1',
    CONCAT(c.city, ', ', c.state, ' ', c.zip) AS 'Address Line 2'
FROM Customers c
JOIN Orders o
    ON c.id = o.customerId
ORDER BY c.lastname
```

<br><br>

9. What is the most likely (sensible) usage of this output? (1 point)

* a) I am probably making an address label
* b) I am contacting the customer about their missing middlename
* c) I am preparing to call the customer regarding their order
* d) I am deleting this customer from the customers table and need to delete their orders now too.
* e) All of the above

<br>

10. Which of the following are aliases? (1 point)

* a) Address Line 1 (column)
* b) Full Name (column)
* c) c (customers table)
* d) o (orders table)
* e) All of the Above
* f) None of the Above

<br>

11. Which of the following are foreign keys? (1 point)

* a) Address Line 1 (column)
* b) Full Name (column)
* c) c (customers table)
* d) o (orders table)
* e) All of the Above
* f) None of the Above

<br>

### Authentication and Authorization

12. Authentication is... (1 point)

* a) Only done through 3rd parties (e.g., Google, Facebook, Twitter)
* b) Verification of user credentials (username, password)
* c) Permissions the user has to visit different parts of your site
* d) A hashing algorithm
* e) A random string added to a password

<br>

13. Authorization is... (1 point)

* a) Only done through 3rd parties (e.g., Google, Facebook, Twitter)
* b) Verification of user credentials (username, password)
* c) Permissions the user has to visit different parts of your site
* d) A hashing algorithm
* e) A random string added to a password

<br>

14. BCrypt is... (1 point)

* a) Only done through 3rd parties (e.g., Google, Facebook, Twitter)
* b) Verification of user credentials (username, password)
* c) Permissions the user has to visit different parts of your site
* d) A hashing algorithm
* e) A random string added to a password

<br>

15. A "salt" is... (1 point)

* a) Only done through 3rd parties (e.g., Google, Facebook, Twitter)
* b) Verification of user credentials (username, password)
* c) Permissions the user has to visit different parts of your site
* d) A hashing algorithm
* e) A random string added to a password

<br>

16. The reason we need a "salt" is... (1 point)

* a) Our computers are bored and need something to occupy their leisure time
* b) It makes rainbow tables useless
* c) It makes programmers feel smart
* d) It's not necessary as long as your password isn't "password"
* e) It's not necessary at all
* e) None of the Above
