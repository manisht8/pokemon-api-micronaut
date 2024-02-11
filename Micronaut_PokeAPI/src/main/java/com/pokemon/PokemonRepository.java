package com.pokemon;

import io.micronaut.data.annotation.Repository;
import io.micronaut.data.repository.CrudRepository;

@Repository
public interface PokemonRepository extends CrudRepository<Pokemon, Integer> {
    public Pokemon findByName(String name);
}
