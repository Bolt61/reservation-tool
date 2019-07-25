package ch.paranor.oester.robin.reservationtool;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import ch.paranor.oester.robin.reservationtool.user.User;
import ch.paranor.oester.robin.reservationtool.user.UserRepository;

@Component
public class DataLoader implements ApplicationRunner {
  
  @Autowired
  private UserRepository userRepository;

  @Override
  public void run(ApplicationArguments args) throws Exception {
    User admin = new User();
    admin.setUsername("Admin");
    admin.setPassword("pegasos");
    admin.setRole("admin");
    userRepository.save(admin);
  }

}
