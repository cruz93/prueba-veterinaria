package com.prueba.veterinaria.veterinaria_patitas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.prueba.veterinaria.veterinaria_patitas.entities.Quote;

public interface QuoteRepository extends JpaRepository<Quote, Integer> {

}
