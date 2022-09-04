package com.onlineBanking.demo.services;

import java.util.List;

import com.onlineBanking.demo.models.Role;
import com.onlineBanking.demo.models.User;

public interface UserService {
    User addUser(User user);
    User findUserById(Long id);
    List<User> findAllUsers();
    User updateUser(User user);
    void deleteById(Long id);
    Role addRole(Role role);
    List<Role> findAllRoles();
    void addRoleToUser(Long id, String roleName);
}
