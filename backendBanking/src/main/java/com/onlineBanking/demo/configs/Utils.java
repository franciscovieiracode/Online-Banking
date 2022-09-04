package com.onlineBanking.demo.configs;

import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

public class Utils {

    public String getSecret(){
        return new String("$2a$12$DstsoJcjLp4Nfv3Uw/4qVexuWRfx6HhBKd3UF3w2PeInSAuOVFo1a");
    }

}
