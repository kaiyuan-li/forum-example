#
## DB
```sh
brew install postgres
brew services start postgres
createdb forum-db
```

``
knex init
knex migrate:make user
knex migrate:latest
psql forum-db

! describe the db with
\d
\d users
```

seed some data into database:
```
knex seed:make 01-roles

knex seed:run
```

Then look at the table:
```
psql forum-db
table role;
```