package com.pokemon;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.OffsetDateTime;

public record PokemonResponse(
    int id,
    String name,
    int baseExperience,
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = Config.DATE_PATTERN, timezone = "UTC")
        OffsetDateTime createdAt,
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = Config.DATE_PATTERN, timezone = "UTC")
        OffsetDateTime updatedAt) {}
