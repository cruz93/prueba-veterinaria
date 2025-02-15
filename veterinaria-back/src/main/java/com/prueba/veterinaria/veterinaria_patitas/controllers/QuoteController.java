package com.prueba.veterinaria.veterinaria_patitas.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.prueba.veterinaria.veterinaria_patitas.entities.Quote;
import com.prueba.veterinaria.veterinaria_patitas.services.QuoteService;

import jakarta.validation.Valid;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("api/quotes")
@CrossOrigin(origins = "http://localhost:4200")
public class QuoteController {

    @Autowired
    private QuoteService quoteService;

    @GetMapping("/all")
    public ResponseEntity<List<Quote>> getAllQuotes() {
        return ResponseEntity.status(HttpStatus.OK).body(quoteService.findAll());
    }

    @PostMapping("/save")
    public ResponseEntity<Quote> saveQuote(@Valid @RequestBody Quote quote) {
        return ResponseEntity.status(HttpStatus.CREATED).body(quoteService.save(quote));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteQuote(@PathVariable int id) {

        Optional<Quote> quote = quoteService.findById(id);

        if (!quote.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } else {
            quoteService.delete(id);
            return ResponseEntity.status(HttpStatus.OK).build();
        }
    }

}
