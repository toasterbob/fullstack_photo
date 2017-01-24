# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
first_name      | string    | not null
last_name       | string    | not null
city            | string    | not null
country         | string    | not null
bio_info        | text      | not null
last_name       | string    | not null
profile_pic_url | string    | not null
cover_photo_url | string    | not null


## photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
photo_url   | string    | not null
user_id     | integer   | not null
description | text      | not null


## follows
column name  | data type | details
------------ |-----------|-----------------------
id           | integer   | not null, primary key
following_id | integer   | not null, foreign key (references users), indexed
follower_id  | integer   | not null, foreign key (references users), indexed

##POST MVP 
## notifications

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed
message         | text      | not null
seen            | boolean   | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
photo_id    | integer   | not null, foreign key (references photos), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed
