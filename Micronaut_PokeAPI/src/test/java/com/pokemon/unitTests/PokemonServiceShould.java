package com.pokemon.unitTests;

import static org.assertj.core.api.Assertions.*;
import static org.junit.Assert.assertThrows;
import static org.mockito.AdditionalAnswers.returnsFirstArg;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import com.pokemon.Pokemon;
import com.pokemon.PokemonRepository;
import com.pokemon.PokemonRequest;
import com.pokemon.PokemonService;
import com.pokemon.exceptions.EntityNotFoundException;
import java.util.ArrayList;
import java.util.Optional;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class PokemonServiceShould {
  private PokemonRepository pokemonRepository;
  private PokemonService pokemonService;

  @BeforeEach
  void setUp() {
    pokemonRepository = mock(PokemonRepository.class);
    pokemonService = new PokemonService(pokemonRepository);
  }

  @Test
  void add_pokemon_to_repository() {
    // arrange
    when(pokemonRepository.save(any(Pokemon.class))).then(returnsFirstArg());

    // action
    Pokemon pokemon = pokemonService.addPokemon(new PokemonRequest(5, "Pikachu", 25));

    // assert
    verify(pokemonRepository).save(pokemon);
    assertThat(pokemon.getId()).isEqualTo(5);
    assertThat(pokemon.getName()).isEqualTo("Pikachu");
    assertThat(pokemon.getBaseExperience()).isEqualTo(25);
  }

  @Test
  void get_all_pokemons() {
    when(pokemonRepository.findAll()).thenReturn(new ArrayList<Pokemon>());

    pokemonService.getAllPokemons();

    verify(pokemonRepository).findAll();
  }

  // generate a test which gets pokemon by id and checks whether it returns pokemon object or not
  @Test
  void get_pokemon_by_id() {
    when(pokemonRepository.findById(5)).thenReturn(Optional.of(new Pokemon(5, "Pikachu", 25)));

    Pokemon pokemon = pokemonService.getPokemonById(5);

    verify(pokemonRepository).findById(5);
    assertThat(pokemon.getId()).isEqualTo(5);
    assertThat(pokemon.getName()).isEqualTo("Pikachu");
  }

  // generate a test which gets pokemon by id and checks whether it throws an exception or not
  @Test
  void get_pokemon_by_id_throws_exception() {
    when(pokemonRepository.findById(5)).thenReturn(Optional.empty());

    assertThrows(
        EntityNotFoundException.class,
        () -> {
          pokemonService.getPokemonById(5);
        });
  }

  @Test
  void get_pokemon_by_name() {
    when(pokemonRepository.findByName("Pikachu")).thenReturn(new Pokemon(5, "Pikachu", 25));

    Pokemon pokemon = pokemonService.getPokemonByName("Pikachu");

    verify(pokemonRepository).findByName("Pikachu");
    assertThat(pokemon.getId()).isEqualTo(5);
    assertThat(pokemon.getName()).isEqualTo("Pikachu");
  }

  @Test
  void get_pokemon_by_name_throws_exception() {
    when(pokemonRepository.findByName("Pikachu")).thenReturn(null);

    assertThrows(
        EntityNotFoundException.class,
        () -> {
          pokemonService.getPokemonByName("Pikachu");
        });
  }

  @Test
  void delete_pokemon_by_id() {
    when(pokemonRepository.findById(1)).thenReturn(Optional.of(new Pokemon(1, "Bulbasaur", 25)));

    Pokemon pokemon = pokemonService.deletePokemonById(1);

    verify(pokemonRepository).deleteById(1);
    assertThat(pokemon.getId()).isEqualTo(1);
    assertThat(pokemon.getName()).isEqualTo("Bulbasaur");
    assertThat(pokemon.getBaseExperience()).isEqualTo(25);
  }

  @Test
  void delete_pokemon_by_id_throws_exception() {
    when(pokemonRepository.findById(5)).thenReturn(Optional.empty());
    assertThrows(
        EntityNotFoundException.class,
        () -> {
          pokemonService.deletePokemonById(5);
        });
  }
}
