package com.pokemon.unitTests;


import com.pokemon.Pokemon;
import com.pokemon.PokemonRepository;
import com.pokemon.PokemonRequest;
import com.pokemon.PokemonService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.AdditionalAnswers.returnsFirstArg;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

public class PokemonServiceShould {
    PokemonRepository pokemonRepository;
    PokemonService pokemonService;

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

}
