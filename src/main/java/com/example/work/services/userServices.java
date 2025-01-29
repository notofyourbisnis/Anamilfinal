package com.example.work.services;

import com.example.work.entities.user;
import com.example.work.repository.userRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class userServices {
    @Autowired
    private userRepository repository;

    public user addUser(user u) {
        return repository.save(u);
    }

    public ArrayList<user> getAll() {
        return (ArrayList<user>) repository.findAll();
    }

    public Optional<user> findUserById(Long id) {
        return repository.findById(id);
    }


    public user login(String email, String password) {
        ArrayList<user> myList = (ArrayList<user>) repository.findAll();
        for (int i = 0; i < myList.size(); i++) {
            if ((myList.get(i).getEmail().equals(email) || myList.get(i).getName().equals(email)) && myList.get(i).getPassword().equals(password)) {
                System.out.println(myList.get(i).getPassword());
                return myList.get(i);
            }
        }
        System.out.println(myList.get(0).getPassword());
        return myList.get(-1);

    }
    public void editUser(long userId,String name , String email, String phone, String password ,String address) {
        user user = repository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + userId));
        user.setName(name);
        user.setEmail(email);
        user.setPhone(phone);
        user.setPassword(password);
        user.setAddress(address);
        repository.save(user);
    }
}