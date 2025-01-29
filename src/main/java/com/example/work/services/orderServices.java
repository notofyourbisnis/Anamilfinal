package com.example.work.services;

import com.example.work.entities.order;
import com.example.work.repository.orderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class orderServices {
    @Autowired
    private orderRepository repository;

    public order addOrder(order o) {
        return repository.save(o);
    }

    public ArrayList<order> getAll() {
        return (ArrayList<order>) repository.findAll();
    }
    public Optional<order> findOrderById(Long id)
    {
        return repository.findById(id);
    }
    public void deleteOrderById(Long id) {
        repository.deleteById(id);
    }

}
