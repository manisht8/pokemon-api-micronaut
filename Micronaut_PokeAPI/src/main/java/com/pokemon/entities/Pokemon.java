package com.pokemon.entities;

import io.micronaut.data.annotation.DateCreated;
import io.micronaut.data.annotation.DateUpdated;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.OffsetDateTime;

@Entity
@Table(name = "pokemons")
public class Pokemon {
    @Id
    private int id;
    private String name;
    private int baseExperience;
    @DateCreated
    private OffsetDateTime createdAt;
    @DateUpdated
    private OffsetDateTime updatedAt;
}
