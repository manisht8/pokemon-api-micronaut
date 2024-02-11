package com.pokemon.integrationTests;

import static org.hamcrest.CoreMatchers.*;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.Matchers.blankOrNullString;
import static org.junit.jupiter.api.Assertions.*;

import com.pokemon.exceptions.EntityNotFoundException;
import io.micronaut.runtime.server.EmbeddedServer;
import io.micronaut.test.extensions.junit5.annotation.MicronautTest;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import jakarta.inject.Inject;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

@MicronautTest
public class PokemonIntegrationTest {
  @Inject EmbeddedServer embeddedServer;
  private String base;

  @BeforeEach
  void setUp() {
    base = embeddedServer.getURI().toString();
  }

  @Test
  void addPokemon() {
    String pokemonBody =
        """
        {
            "id": 5,
            "name": "Pikachu",
            "baseExperience": 25
        }
        """;
    int id = savePokemon(pokemonBody);
    assertEquals(id, getPokemonById(id));
  }

  private int savePokemon(String pokemonBody) {
    return RestAssured.given()
        .log()
        .all()
        .when()
        .contentType(ContentType.JSON)
        .body(pokemonBody)
        .post(base + "/api/pokemons")
        .then()
        .log()
        .all()
        .body("id", not(nullValue()))
        .body("name", not(blankOrNullString()))
        .body("baseExperience", not(nullValue()))
        .body("createdAt", is(not(blankOrNullString())))
        .body("updatedAt", is(not(blankOrNullString())))
        .extract()
        .body()
        .path("id");
  }

  @Test
  void removePokemon() {
    int id = deletePokemon(1);
    assertEquals(1, id);
  }

  private int deletePokemon(int id) {
    return RestAssured.given()
        .log()
        .all()
        .when()
        .delete(base + "/api/pokemons/delete/" + id)
        .then()
        .log()
        .all()
        .extract()
        .body()
        .path("id");
  }

  private int getPokemonById(int id) {
    return RestAssured.given()
        .log()
        .all()
        .when()
        .get(base + "/api/pokemons/" + id)
        .then()
        .log()
        .all()
        .extract()
        .body()
        .path("id");
  }
}
