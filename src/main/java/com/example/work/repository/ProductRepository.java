package com.example.work.repository;

import com.example.work.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    @Query("SELECT p FROM Product p") // 🔥 Custom query to fetch all products
    // Custom query to search by name (case-insensitive)
    List<Product> findByNameContainingIgnoreCase(String name);
}
