package com.example.work.controllers;
import com.example.work.entities.user;
import com.example.work.services.userServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
public class userController {

    @Autowired
    private userServices userServices;
    @PostMapping("/users/addUser")
    public @ResponseBody user addUser(@RequestBody user u)
    {
        return userServices.addUser(u);
    }

    @GetMapping("/users/getAll")
    public @ResponseBody ArrayList<user> getAll()
    {
        return userServices.getAll();
    }

    @GetMapping("/users/findUserId/{id}")
    public @ResponseBody Optional<user> findUserById(@PathVariable Long id)
    {
        return userServices.findUserById(id);
    }
    @GetMapping("/users/login/{email}/{password}")
    public @ResponseBody user login(@PathVariable String  email ,@PathVariable String  password) {
        return userServices.login(email, password);
    }
    @PutMapping("/users/editUser/{userId}/{userName}/{email}/{phoneNumber}/{password}/{address}")
    public ResponseEntity<String> editUser(@PathVariable long userId , @PathVariable String userName , @PathVariable String email, @PathVariable String phoneNumber, @PathVariable String password ,@PathVariable String address) {
        userServices.editUser(userId, userName, email, phoneNumber, password,address);
        return ResponseEntity.ok("User edited successfully.");
    }

}
