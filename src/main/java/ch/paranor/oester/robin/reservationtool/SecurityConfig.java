package ch.paranor.oester.robin.reservationtool;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.security.core.session.SessionRegistryImpl;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter implements WebMvcConfigurer {
  
  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
      .authorizeRequests()
        .antMatchers("/assets/styles/*", "/assets/images/*").permitAll()
        .anyRequest().authenticated()
        .and()
      .formLogin()
        .loginPage("/login")
        .defaultSuccessUrl("/", true)
        .permitAll()
        .and()
      .httpBasic()
        .and()
      .csrf().disable()
      .logout()
        .logoutSuccessUrl("/login?logout").permitAll()
        .invalidateHttpSession(true)
        .deleteCookies("JSESSIONID")
        .and()
      .sessionManagement().invalidSessionUrl("/login?expired")
        .maximumSessions(1).expiredUrl("/login?expired")
        .sessionRegistry(sessionRegistry());
  }
  
  @Override
  public void addResourceHandlers(ResourceHandlerRegistry registry) {
    if(!registry.hasMappingForPattern("/assets/**")) {
      registry.addResourceHandler("/assets/**").addResourceLocations("classpath:/assets/");
    }
  }
  
  @Override
  public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/**");
  }
  
  @Override
  public void addViewControllers(ViewControllerRegistry registry) {
    registry.addViewController("/").setViewName("forward:/index.html");
  }
  
  @Bean
  public SessionRegistry sessionRegistry() {
    return new SessionRegistryImpl();
  }
  
  @Override
  protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    PasswordEncoder encoder = new BCryptPasswordEncoder();
    auth.inMemoryAuthentication()
      .passwordEncoder(encoder)
      .withUser("user")
      .password(encoder.encode("password"))
      .roles("USER");
  }
}
