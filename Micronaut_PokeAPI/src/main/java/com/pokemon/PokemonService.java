package com.pokemon;

import com.pokemon.exceptions.EntityNotFoundException;
import jakarta.inject.Singleton;

import java.util.List;

@Singleton
public class PokemonService {
    private final PokemonRepository pokemonRepository;

    public PokemonService(PokemonRepository pokemonRepository) {
        this.pokemonRepository = pokemonRepository;
    }

    public Pokemon addPokemon(PokemonRequest pokemonRequest) {
        Pokemon pokemon = new Pokemon();
        pokemon.setId(pokemonRequest.id());
        pokemon.setName(pokemonRequest.name());
        pokemon.setBaseExperience(pokemonRequest.baseExperience());
        return pokemonRepository.save(pokemon);
    }

    public List<Pokemon> getAllPokemons() {
        return pokemonRepository.findAll();
    }

    public Pokemon getPokemonById(int id) {
        return pokemonRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Pokemon with id [" + id + "] not found!"));
    }

    public Pokemon getPokemonByName(String name) {
        Pokemon pokemon = pokemonRepository.findByName(name);
        if(pokemon != null){
            return pokemon;
        } else {
            throw new EntityNotFoundException("Pokemon with name [" + name + "] not found!");
        }
    }
}

