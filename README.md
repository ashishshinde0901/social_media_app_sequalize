# Social media app using sequalize and jquery

## Database Setup

```shell
$ mysql -u root 
```

```mysql
create database socialmediadb;

create user socialmediauser identified by 'socialmediapass';

grant all privileges on socialmediadb.* to socialmediauser;

flush privileges
```


## Project Structure

### Frontend

```shell
public
├── app
│   └── app.js
├── components
├── css
│   ├── bootstrap.min.css
│   └── styles.css
├── index.html
└── js
    ├── bootstrap.min.js
    ├── jquery-3.7.1.js
    ├── jquery-3.7.1.js.js
    ├── jquery-3.7.1.min.js
    └── popper.min.js
```
### Backend

```shell
.
├── controllers  # functions to connect route to db operations
├── db           # db connection and model definations.
├── public       # All html css js static files.
└── routes       # express middlewares (route wise)

```

## Business logic

### Users

1. **create users**
   this will create new user with random username.

### Posts

1. **create post**
   this will create a new post, required fields are
   - username (the author of this post)
   - title
   - body

2. **show all posts**
   list all existing posts, we should have following filtering support.
   
   - filter by username
   - filter by query contained in title (search by title)

3. **edit posts**

4. **delete posts**
   
### Comments

1. **show all comments (of a user)**

2. **show all comments (under a post)**

3. **add a comment**
