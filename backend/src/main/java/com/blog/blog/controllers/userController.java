package com.blog.blog.controllers;

import java.util.HashMap;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.blog.blog.models.user;

@RequestMapping("/user")
@RestController
public class userController {
    


    @GetMapping("/getUser")
    public user getUser(){
        user u = new user("1233");

        return u;
    } 

    @PostMapping("/postUser")
    @ResponseStatus(code = HttpStatus.OK)
    public HashMap<String,String> getUser1(){

        HashMap<String, String> map = new HashMap<>();
        map.put("state", "added");
        map.put("code", "200");
    
        return map;
    } 

}
