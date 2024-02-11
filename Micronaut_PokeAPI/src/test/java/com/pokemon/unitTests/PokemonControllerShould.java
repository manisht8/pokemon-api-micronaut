package com.pokemon.unitTests;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.AdditionalAnswers.returnsFirstArg;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

import com.pokemon.*;
import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class PokemonControllerShould {
  private PokemonService pokemonService;
  private PokemonController pokemonController;

  @BeforeEach
  void setUp() {
    this.pokemonService = mock(PokemonService.class);
    this.pokemonController = new PokemonController(pokemonService);
  }

  @Test
  void invoke_add_pokemon_in_service_and_return_pokemon() {
    when(pokemonService.addPokemon(any(PokemonRequest.class)))
        .thenReturn(new Pokemon(5, "Pikachu", 25));

    PokemonResponse pokemon = pokemonController.addPokemon(new PokemonRequest(5, "Pikachu", 25));

    verify(pokemonService).addPokemon(any(PokemonRequest.class));
    assertThat(pokemon.id()).isEqualTo(5);
    assertThat(pokemon.name()).isEqualTo("Pikachu");
    assertThat(pokemon.baseExperience()).isEqualTo(25);
  }

  @Test
  void invoke_get_all_pokemons_in_service_and_returns_all_pokemons() {
    ArrayList<Pokemon> pokemons = new ArrayList<>();
    pokemons.add(new Pokemon(1, "Bulbasaur", 45));
    when(pokemonService.getAllPokemons()).thenReturn(pokemons);

    List<PokemonResponse> allPokemons = pokemonController.getAllPokemons();

    verify(pokemonService).getAllPokemons();
    assertThat(allPokemons.get(0).id()).isEqualTo(pokemons.get(0).getId());
    assertThat(allPokemons.get(0).name()).isEqualTo(pokemons.get(0).getName());
  }

  @Test
  void invoke_get_pokemon_by_id_in_service_and_returns_pokemon() {
    when(pokemonService.getPokemonById(5)).thenReturn(new Pokemon(5, "Pikachu", 25));

    PokemonResponse pokemon = pokemonController.getPokemonById(5);

    verify(pokemonService).getPokemonById(5);
    assertThat(pokemon.id()).isEqualTo(5);
    assertThat(pokemon.name()).isEqualTo("Pikachu");
  }

  @Test
  void invoke_get_pokemon_by_name_in_service_and_returns_pokemon() {
    when(pokemonService.getPokemonByName("Pikachu")).thenReturn(new Pokemon(5, "Pikachu", 25));

    PokemonResponse pokemon = pokemonController.getPokemonByName("Pikachu");

    verify(pokemonService).getPokemonByName("Pikachu");
    assertThat(pokemon.id()).isEqualTo(5);
    assertThat(pokemon.name()).isEqualTo("Pikachu");
  }

  @Test
  void invoke_delete_pokemon_by_id_in_service_and_returns_id() {
    when(pokemonService.deletePokemonById(1)).thenReturn(new Pokemon(1, "Bulbasaur", 45));

    PokemonResponse pokemonResponse = pokemonController.deletePokemonById(1);

    verify(pokemonService).deletePokemonById(1);
    assertThat(pokemonResponse.id()).isEqualTo(1);
    assertThat(pokemonResponse.name()).isEqualTo("Bulbasaur");
    assertThat(pokemonResponse.baseExperience()).isEqualTo(45);
  }
}
