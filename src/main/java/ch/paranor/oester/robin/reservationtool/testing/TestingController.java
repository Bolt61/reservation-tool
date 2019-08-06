package ch.paranor.oester.robin.reservationtool.testing;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import ch.paranor.oester.robin.reservationtool.mail.MailService;
import ch.paranor.oester.robin.reservationtool.reservation.blocker.Blocker;
import ch.paranor.oester.robin.reservationtool.reservation.blocker.BlockerRepository;

@Controller
public class TestingController {

  @Autowired
  private MailService mailService;
  
  @Autowired
  private BlockerRepository repo;
  
  @GetMapping(value = "/api/test")
  @ResponseBody
  public Iterable<Blocker> test() {
    return repo.findAll();
  }
  
  @GetMapping(value = "/api/mail")
  public void sendMessage() {
    mailService.sendTestMail();
  }
  
  @GetMapping(value = "/api/hello")
  @ResponseBody
  public MessageDto hello() {
    return new MessageDto("Servertime is: " + new Date());
  }
}
