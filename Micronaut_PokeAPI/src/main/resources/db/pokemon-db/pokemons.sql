-- liquibase formatted sql

-- changeset Yash-Koshti:creating-pokemon
create table pokemons (
    id smallint(4) unsigned primary key,
    name varchar(256) not null,
    baseExperience smallint(3) unsigned default 10,
    createdAt timestamp,
    updatedAt timestamp
) collate = utf8mb4_unicode_ci;

-- changeset Yash-Koshti:adding-pokemons-to-pokemons-table
insert into pokemons (id, name, baseExperience, createdAt, updatedAt) values (1, 'Bulbasaur', 64, now(), now());
insert into pokemons (id, name, baseExperience, createdAt, updatedAt) values (2, 'Ivysaur', 142, now(), now());
insert into pokemons (id, name, baseExperience, createdAt, updatedAt) values (3, 'Venusaur', 236, now(), now());
insert into pokemons (id, name, baseExperience, createdAt, updatedAt) values (4, 'Charmander', 62, now(), now());
