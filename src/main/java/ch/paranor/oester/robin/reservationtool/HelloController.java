package ch.paranor.oester.robin.reservationtool;

import java.util.Date;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    
  @GetMapping(value = "/api/hello")
  @ResponseBody
  public MessageDto hello() {
    return new MessageDto("Servertime is: " + new Date());
  }
  
  @GetMapping(value = "/principal")
  @ResponseBody
  public PrincipalDto principal() {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    String userName = authentication == null ? null : authentication.getName();
    PrincipalDto dto = new PrincipalDto(userName);
    return dto;
  }
  
  //TODO insert 'users' endpoint here
  
  @GetMapping("/")
  public String index() {
    return "index";
  }
  
  class PrincipalDto {
    public final String userName;
    
    public PrincipalDto(String userName) {
      this.userName = userName;
    }
  }
}
