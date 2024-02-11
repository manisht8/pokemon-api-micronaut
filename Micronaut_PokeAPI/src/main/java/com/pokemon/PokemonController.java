package com.pokemon;

import io.micronaut.http.annotation.Body;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.annotation.Post;

import java.util.List;

@Controller("/api/pokemons")
public class PokemonController {
  private PokemonService pokemonService;

  public PokemonController(PokemonService pokemonService) {
    this.pokemonService = pokemonService;
  }

  @Post
  public Pokemon addPokemon(@Body PokemonRequest pokemonRequest) {
    return pokemonService.addPokemon(pokemonRequest);
  }

  @Get
  public List<PokemonResponse> getAllPokemons() {
    List<Pokemon> pokemons = pokemonService.getAllPokemons();
    return pokemons.stream()
        .map(
            pokemon ->
                new PokemonResponse(
                    pokemon.getId(),
                    pokemon.getName(),
                    pokemon.getBaseExperience(),
                    pokemon.getCreatedAt(),
                    pokemon.getUpdatedAt()))
        .toList();
  }
}
