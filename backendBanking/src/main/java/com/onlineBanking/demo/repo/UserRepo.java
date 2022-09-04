package com.onlineBanking.demo.repo;


import org.springframework.data.jpa.repository.JpaRepository;

import com.onlineBanking.demo.models.User;




public interface UserRepo extends JpaRepository<User, Long>{

    void deleteClientById(Long id);

    User findClientById(Long id);

    User findClientByUsername(String username);
}
