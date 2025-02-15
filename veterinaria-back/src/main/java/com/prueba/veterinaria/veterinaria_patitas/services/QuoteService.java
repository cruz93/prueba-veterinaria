package com.prueba.veterinaria.veterinaria_patitas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.prueba.veterinaria.veterinaria_patitas.entities.Quote;
import com.prueba.veterinaria.veterinaria_patitas.interfaces.QuoteInterface;
import com.prueba.veterinaria.veterinaria_patitas.repositories.QuoteRepository;

@SpringBootApplication
public class QuoteService implements QuoteInterface {

    @Autowired
    private QuoteRepository quoteRepository;

    @Override
    public List<Quote> findAll() {
        return quoteRepository.findAll();
    }

    @Override
    public Optional<Quote> findById(int id) {
        return quoteRepository.findById(id);
    }

    @Override
    public Quote save(Quote quote) {
        return quoteRepository.save(quote);
    }

    @Override
    public void delete(int id) {
        quoteRepository.deleteById(id);
    }

}
