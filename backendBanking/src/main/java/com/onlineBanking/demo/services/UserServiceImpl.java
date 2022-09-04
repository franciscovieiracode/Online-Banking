package com.onlineBanking.demo.services;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.onlineBanking.demo.exceptions.UserNotFoundException;
import com.onlineBanking.demo.models.Role;
import com.onlineBanking.demo.models.User;
import com.onlineBanking.demo.repo.RoleRepo;
import com.onlineBanking.demo.repo.UserRepo;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;



@Service
@Transactional 
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService, UserDetailsService{
    private final UserRepo userRepo;
    private final RoleRepo roleRepo;
    private final PasswordEncoder passwordEncoder;
    
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user = userRepo.findClientByUsername(username);

        if(user == null){
            log.info("User {} not found in database", username);
            throw new UserNotFoundException("User "+username+" not found in database");
        }else{
            log.info("User {} found in database", username);
        }

        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        user.getRoles().forEach(role ->{
            authorities.add(new SimpleGrantedAuthority(role.getName()));
        });

        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), authorities);
    }

    @Override
    public User addUser(User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setCreatedAt(LocalDate.now().toString());
        user.setLastLogin(LocalDate.now().toString());
        log.info("Saved user {} to the dabatase", user.getEmail());


        return userRepo.save(user);
    }

    
    public User findUserByUsername(String username){
        
        User user = userRepo.findClientByUsername(username);

        if(user == null)
            throw new UserNotFoundException("User with username "+ username +" was not found");

        return user;
    }

    @Override
    public User findUserById(Long id){
        User user = userRepo.findClientById(id);

        if(user == null)
            throw new UserNotFoundException("User with id "+ id +" was not found");

        return user;
    }

    @Override
    public List<User> findAllUsers(){
        return userRepo.findAll();
    }
    
    @Override
    public User updateUser(User user){
        log.info("Updated user {} to the dabatase", user.getEmail());
        return userRepo.save(user);
    }

    @Override
    public void deleteById(Long id){
        log.info("Detelted user {} to the dabatase", id);
        userRepo.deleteClientById(id);
    }

    @Override
    public Role addRole(Role role) {
        return roleRepo.save(role);
    }

    @Override
    public List<Role> findAllRoles(){
        return roleRepo.findAll();
    }

    @Override
    public void addRoleToUser(Long id, String roleName) {
        User user = userRepo.findClientById(id);
        Role role = roleRepo.findByName(roleName);

        if(user == null || role == null)
            throw new UserNotFoundException("User with id "+ id +" was not found");
     
        user.getRoles().add(role);
    }
}

