package com.example.work.repository;

import com.example.work.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    // Custom query to search by name (case-insensitive)
    List<Product> findByNameContainingIgnoreCase(String name);
}
