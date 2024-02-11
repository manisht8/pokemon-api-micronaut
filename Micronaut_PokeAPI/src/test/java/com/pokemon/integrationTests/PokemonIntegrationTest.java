package com.pokemon.integrationTests;

import io.micronaut.runtime.server.EmbeddedServer;
import io.micronaut.test.extensions.junit5.annotation.MicronautTest;
import io.restassured.specification.RequestSpecification;
import jakarta.inject.Inject;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.Assert.assertEquals;

@MicronautTest
public class PokemonIntegrationTest {
    @Inject
    EmbeddedServer embeddedServer;
    private String base;

    @BeforeEach
    void setUp(){
        base = embeddedServer.getURI().toString();
    }

    @Test
    void addPokemon(RequestSpecification specs) {
        int id = savePokemon(specs);
        assertEquals(id, getPokemonById(base, id));
    }

    private int getPokemonById(String base, int id) {
        return 0;
    }

    private int savePokemon(RequestSpecification specs) {
        return 0;
    }
}
