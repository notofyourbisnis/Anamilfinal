package com.example.work.services;

import com.example.work.entities.Product;
import com.example.work.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServices {

    @Autowired
    private ProductRepository Repository; // Repository to interact with the database

    // 1. Get all products
    public List<Product> getAllProducts() {
        return Repository.findAll();
    }

    // 2. Get a single product by ID
    public Product getProductById(Long id) {
        Optional<Product> product = Repository.findById(id);
        return product.orElse(null); // Return product if found, else null
    }

    // 3. Add a new product
    public Product addProduct(Product x) {
        return Repository.save(x);
    }

    // 4. Update a product
    public Product updateProduct(Long id, Product updatedProduct) {
        Optional<Product> existingProduct =Repository.findById(id);

        if (existingProduct.isPresent()) {
            Product product = existingProduct.get();
            product.setName(updatedProduct.getName());
            product.setPrice(updatedProduct.getPrice());
            product.setDescription(updatedProduct.getDescription());
            product.setStock(updatedProduct.getStock());
            product.setImageUrl(updatedProduct.getImageUrl());
            return Repository.save(product);
        } else {
            return null; // Product not found
        }
    }

    // 5. Delete a product
    public boolean deleteProduct(Long id) {
        Optional<Product> product = Repository.findById(id);
        if (product.isPresent()) {
          Repository.deleteById(id);
            return true;
        } else {
            return false; // Product not found
        }
    }

    // 6. Apply a discount to a product
    public Product applyDiscount(Long id, double discountPercentage) {
        Optional<Product> existingProduct = Repository.findById(id);

        if (existingProduct.isPresent()) {
            Product product = existingProduct.get();
            double discountedPrice = product.getPrice() - (product.getPrice() * discountPercentage / 100);
            product.setPrice(Math.round(discountedPrice * 100.0) / 100.0); // Round to 2 decimal places
            return Repository.save(product);
        } else {
            return null; // Product not found
        }
    }

    // 7. Search products by name (case-insensitive)
    public List<Product> searchProductsByName(String name) {
        return Repository.findByNameContainingIgnoreCase(name);
    }
}
