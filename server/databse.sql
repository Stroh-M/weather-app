CREATE DATABASE weather;

CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE,
    password VARCHAR(100),
);

