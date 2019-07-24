package ch.paranor.oester.robin.reservationtool;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {
  
  @Autowired
  private MailService mailService;
    
  @GetMapping(value = "/api/hello")
  @ResponseBody
  public MessageDto hello() {
    return new MessageDto("Servertime is: " + new Date());
  }
  
  @GetMapping(value = "/api/mail")
  public void sendMessage() {
    mailService.sendMail();
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

  @GetMapping("/logout")
  public String logout() {
    return "redirect:/login?logout";
  }
  
  @GetMapping("/login") 
  public String login() {
    return "login";
  }
  
  class PrincipalDto {
    public final String userName;
    
    public PrincipalDto(String userName) {
      this.userName = userName;
    }
  }
}
