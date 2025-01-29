package com.example.work.entities;

import jakarta.persistence.*;

import java.io.Serializable;



    @Entity
    @Table(name="products")
    public class Product implements Serializable {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
            private String name;
            private double price;
            private String description;
            private int stock;
            private String imageUrl; // URL or path to the product image

            // Constructor
            public Product(String name, double price, String description, int stock, String imageUrl) {
                this.name = name;
                this.price = price;
                this.description = description;
                this.stock = stock;
                this.imageUrl = imageUrl;
            }

        public Product() {

        }

        // Getters and Setters
            public String getName() {
                return name;
            }

            public void setName(String name) {
                this.name = name;
            }

            public double getPrice() {
                return price;
            }

            public void setPrice(double price) {
                this.price = price;
            }

            public String getDescription() {
                return description;
            }

            public void setDescription(String description) {
                this.description = description;
            }

            public int getStock() {
                return stock;
            }

            public void setStock(int stock) {
                this.stock = stock;
            }

            public String getImageUrl() {
                return imageUrl;
            }

            public void setImageUrl(String imageUrl) {
                this.imageUrl = imageUrl;
            }

            // Methods
            public void updateStock(int amount) {
                if (stock + amount < 0) {
                    System.out.println("Not enough stock to remove " + Math.abs(amount) + " items.");
                } else {
                    stock += amount;
                    System.out.println("Stock updated successfully. New stock: " + stock);
                }
            }

            public double applyDiscount(double discountPercentage) {
                if (discountPercentage < 0 || discountPercentage > 100) {
                    throw new IllegalArgumentException("Discount percentage must be between 0 and 100.");
                }
                double discountedPrice = price - (price * discountPercentage / 100);
                return Math.round(discountedPrice * 100.0) / 100.0; // Rounded to 2 decimal places
            }

            public void displayProduct() {
                System.out.println("Product Name: " + name);
                System.out.println("Price: $" + price);
                System.out.println("Description: " + description);
                System.out.println("Stock: " + stock + " items available");
                System.out.println("Image URL: " + imageUrl);
            }

            // Example of overriding toString()
            public String toString() {
                return "Product{" +
                        "name='" + name + '\'' +
                        ", price=" + price +
                        ", description='" + description + '\'' +
                        ", stock=" + stock +
                        ", imageUrl='" + imageUrl + '\'' +
                        '}';
            }
        }
