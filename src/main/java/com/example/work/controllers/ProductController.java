package com.example.work.controllers;

import com.example.work.entities.Product;
import com.example.work.services.ProductServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    private ProductServices productService; // Assume a ProductService handles business logic

    public ProductController(ProductServices productService) {
        this.productService = productService;}
    // 1. Get all products
    @GetMapping("products/getAllProducts")
    public List<Product> getAllProducts() {
        return productService.getAllProducts(); // ✅ Correct
    }
    // 2. Get a single product by ID
    @GetMapping("products/getProductById/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable("id") Long id) {
        Product product = productService.getProductById(id);
        if (product != null) {
            return ResponseEntity.ok(product);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // 3. Add a new product
    @PostMapping("/products/addProduct")
    public @ResponseBody Product addProduct(@RequestBody Product u)
    {
        return productService.addProduct(u);
    }


    // 4. Update a product
    @PutMapping("products/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable("id") Long id, @RequestBody Product updatedProduct) {
        Product product = productService.updateProduct(id, updatedProduct);
        if (product != null) {
            return ResponseEntity.ok(product);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // 5. Delete a product
    @DeleteMapping("products/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable("id") Long id) {
        boolean deleted = productService.deleteProduct(id);
        if (deleted) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // 6. Apply a discount to a product
    @PutMapping("products/{id}/discount")
    public ResponseEntity<Product> applyDiscount(@PathVariable("id") Long id, @RequestParam double discountPercentage) {
        Product product = productService.applyDiscount(id, discountPercentage);
        if (product != null) {
            return ResponseEntity.ok(product);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // 7. Search products by name
    @GetMapping("products/search")
    public List<Product> searchProducts(@RequestParam String name) {
        return productService.searchProductsByName(name);
    }
}