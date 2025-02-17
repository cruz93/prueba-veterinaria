package com.prueba.veterinaria.veterinaria_patitas.interfaces;

import java.util.List;
import java.util.Optional;

import com.prueba.veterinaria.veterinaria_patitas.entities.Quote;

public interface QuoteInterface {

    public List<Quote> findAll();

    public Optional<Quote> findById(int id);

    public Quote save(Quote quote);

    public void delete(int id);

}
