package com.pokemon;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record PokemonRequest(@Min(1) int id, @NotNull @NotBlank String name, int baseExperience) { }

