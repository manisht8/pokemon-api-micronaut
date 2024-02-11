package com.pokemon;

import io.micronaut.http.annotation.*;
import java.util.List;

@Controller("/api/pokemons")
public class PokemonController {
  private PokemonService pokemonService;

  public PokemonController(PokemonService pokemonService) {
    this.pokemonService = pokemonService;
  }

  @Post
  public PokemonResponse addPokemon(@Body PokemonRequest pokemonRequest) {
    Pokemon pokemon = pokemonService.addPokemon(pokemonRequest);
    return new PokemonResponse(
            pokemon.getId(),
            pokemon.getName(),
            pokemon.getBaseExperience(),
            pokemon.getCreatedAt(),
            pokemon.getUpdatedAt());
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

  @Get("/{id}")
  public PokemonResponse getPokemonById(@PathVariable int id) {
    Pokemon pokemon = pokemonService.getPokemonById(id);
    return new PokemonResponse(
        pokemon.getId(),
        pokemon.getName(),
        pokemon.getBaseExperience(),
        pokemon.getCreatedAt(),
        pokemon.getUpdatedAt());
  }

  @Get("/search/{name}")
  public PokemonResponse getPokemonByName(@PathVariable String name) {
    Pokemon pokemon = pokemonService.getPokemonByName(name);
    return new PokemonResponse(
        pokemon.getId(),
        pokemon.getName(),
        pokemon.getBaseExperience(),
        pokemon.getCreatedAt(),
        pokemon.getUpdatedAt());
  }

  @Delete("/delete/{id}")
  public PokemonResponse deletePokemonById(@PathVariable int id) {
    Pokemon pokemon = pokemonService.deletePokemonById(id);
    return new PokemonResponse(
        pokemon.getId(),
        pokemon.getName(),
        pokemon.getBaseExperience(),
        pokemon.getCreatedAt(),
        pokemon.getUpdatedAt());
  }
}
