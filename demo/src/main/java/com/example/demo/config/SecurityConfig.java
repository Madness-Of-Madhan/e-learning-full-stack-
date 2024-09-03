package com.example.demo.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    @Qualifier("userInfoUserDetailsService")
    private UserDetailsService userDetailsService;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        
        http
            .cors(cors -> cors.configurationSource(request -> {
                var corsConfiguration = new CorsConfiguration();
                corsConfiguration.setAllowedOrigins(List.of("http://localhost:3000"));
                corsConfiguration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
                corsConfiguration.setAllowedHeaders(List.of("*"));
                corsConfiguration.setAllowCredentials(true);
                return corsConfiguration;
            }))
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(authz -> authz
                // Permit all GET requests to certain endpoints
                .requestMatchers("/course/get/**", "/login/get/**", "/materials/get/**", "/api/get**", "/pay/get/**", "/tutors/get/**", "/register/get/**", "/user/get/**", "/v3/api-docs/**", "/swagger-ui.html", "/swagger-ui/**", "/enroll/course/**", "/register/get", "/course/getAll", "/materials/getAll", "/tutors/getall", "/api/getall").permitAll()
                // Permit POST requests to login and user registration (authentication)
                .requestMatchers("/user/register", "/register/newuser").permitAll()
                // Require authentication for all other POST, PUT, DELETE endpoints
                .requestMatchers("/register/put/**", "/register/delete/**").permitAll()
                .requestMatchers("/course/post", "/course/put/**", "/course/delete/**").permitAll()
                .requestMatchers("/user/forgot/**", "/user/role/**", "/user/login").permitAll()
                .requestMatchers("/materials/post", "/materials/put/**", "/materials/delete/**").permitAll()
                .requestMatchers("/pay/post").permitAll()
                .requestMatchers("/tutors/post", "/tutors/put/**", "/tutors/delete/**").permitAll()
                .requestMatchers("/api/achievements", "api/put/**", "api/delete/**").permitAll()
                .requestMatchers("/enroll/post").permitAll()
            )
            .formLogin(form -> form
                .permitAll()
            )
            .logout(logout -> logout
                .permitAll()
            );

        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
