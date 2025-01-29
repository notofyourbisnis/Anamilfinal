package com.example.work.controllers;

import com.example.work.entities.order;
import com.example.work.services.orderServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
public class orderController {
      @Autowired
    private orderServices orderServices;
    @PostMapping("/orders/addOrder")
    public @ResponseBody order addOrder(@RequestBody order o)
    {
        return orderServices.addOrder(o);
    }

    @GetMapping("/orders/getAll")
    public @ResponseBody ArrayList<order> getAll()
    {
        return orderServices.getAll();
    }
    @GetMapping("/orders/findOrderId/{id}")
    public @ResponseBody Optional<order> findOrderById(@PathVariable Long id)
    {
        return orderServices.findOrderById(id);
    }
    @DeleteMapping("/orders/delete/{id}")
    public ResponseEntity<String> deleteOrder(@PathVariable Long id) {
        Optional<order> orderOptional = orderServices.findOrderById(id);
        if (orderOptional.isPresent()) {
            orderServices.deleteOrderById(id);
            return ResponseEntity.ok().body("deleted sucsesfuly ");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
