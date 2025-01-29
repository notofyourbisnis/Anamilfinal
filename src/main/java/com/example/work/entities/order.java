package com.example.work.entities;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name="orders")
public class order implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private int quantity;
    private String address;
    private int phoneNum;

    public order() {
    }

    public order(Long id, String name, int quantity, String address, int phoneNum) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.address = address;
        this.phoneNum = phoneNum;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getPhoneNum() {
        return phoneNum;
    }

    public void setPhoneNum(int phoneNum) {
        this.phoneNum = phoneNum;
    }

}

