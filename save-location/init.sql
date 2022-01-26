drop database if exists api;

create database api;

-- create table user with id, name, email, phone number
create table user (
  id int not null auto_increment,
  name varchar(255) not null,
  email varchar(255) not null,
  phone varchar(255) not null,
  primary key (id),
  unique (email),
);

-- create table location with latitude and longitude
create table location (
  id int not null auto_increment,
  latitude real not null,
  longitude real not null,
  user_id int not null,
  primary key (id)
  foreign key (user_id) references user(id)
);

-- create table strava_info with id, client_id, client_secret, refresh_token
create table strava_info (
  id int not null auto_increment,
  client_id varchar(255) not null,
  client_secret varchar(255) not null,
  refresh_token varchar(255) not null,
  user_id int not null,
  primary key (id),
  foreign key (user_id) references user(id),
  unique(user_id),
);