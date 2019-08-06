package ch.paranor.oester.robin.reservationtool.mail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
public class MailService {

  @Autowired
  private JavaMailSender jms;
  
  public void sendTestMail() {
    SimpleMailMessage message = new SimpleMailMessage();
    
    message.setSubject("Test-Mail");
    message.setFrom("Scheff");
    message.setTo("robin.oester@gmail.com");
    message.setText("Guten Tag, hierbei handelt es sich um eine versendete Test-Nachricht");
    
    jms.send(message);
  }
}
