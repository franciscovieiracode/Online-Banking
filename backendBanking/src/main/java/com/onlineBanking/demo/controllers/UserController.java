package com.onlineBanking.demo.controllers;

import java.util.List;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onlineBanking.demo.models.Role;
import com.onlineBanking.demo.models.User;
import com.onlineBanking.demo.services.UserServiceImpl;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {
    private final UserServiceImpl userServiceImpl;

    @GetMapping("/all")
    public ResponseEntity <List<User>> getAllUsers(){
        return new ResponseEntity<List<User>>(userServiceImpl.findAllUsers(), HttpStatus.OK);
    }

    @GetMapping("/find/id/{id}")
    public ResponseEntity <User> getUser(@PathVariable("id") Long id){
        return new ResponseEntity<>(userServiceImpl.findUserById(id), HttpStatus.OK); 
    }

    @GetMapping("/find/username/{username}")
    public ResponseEntity <User> getUserByUserName(@PathVariable("username") String username){
        return new ResponseEntity<>(userServiceImpl.findUserByUsername(username), HttpStatus.OK); 
    }

    @PostMapping("/add")
    public ResponseEntity<User> addUser(@RequestBody User client){
        return new ResponseEntity<>(userServiceImpl.addUser(client), HttpStatus.CREATED);
    }

    @PutMapping("/edit")
    public ResponseEntity<User> updateUser(@RequestBody User client){
        return new ResponseEntity<>(userServiceImpl.updateUser(client), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<User> deleteUser(@PathVariable("id")Long id){
        userServiceImpl.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/add/role")
    public ResponseEntity<Role> getAllRoles(@RequestBody Role role){
        return new ResponseEntity<>(userServiceImpl.addRole(role), HttpStatus.CREATED);
    }

    @GetMapping("/all/roles")
    public ResponseEntity<List<Role>> addRole(){
        return new ResponseEntity<List<Role>>(userServiceImpl.findAllRoles(), HttpStatus.OK);
    }

    @PostMapping("/add/roletouser")
    public ResponseEntity<Role> addRoleToUser(@RequestBody RoleToUserForm roleToUserForm){
        userServiceImpl.addRoleToUser(roleToUserForm.getId(), roleToUserForm.getRoleName());
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

}
    @Data
    class RoleToUserForm {
        private Long id;
        private String roleName;
    }

