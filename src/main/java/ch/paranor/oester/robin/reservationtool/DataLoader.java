package ch.paranor.oester.robin.reservationtool;

import java.util.Calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import ch.paranor.oester.robin.reservationtool.reservation.Reservation;
import ch.paranor.oester.robin.reservationtool.reservation.ReservationRepository;
import ch.paranor.oester.robin.reservationtool.reservation.blocker.Blocker;
import ch.paranor.oester.robin.reservationtool.reservation.blocker.BlockerRepository;
import ch.paranor.oester.robin.reservationtool.user.User;
import ch.paranor.oester.robin.reservationtool.user.UserRepository;

@Component
public class DataLoader implements ApplicationRunner {
  
  @Autowired
  private UserRepository userRepository;
  
  @Autowired
  private ReservationRepository reservationRepository;
  
  @Autowired
  private BlockerRepository blockerRepository;

  @Override
  public void run(ApplicationArguments args) throws Exception {
    User admin = new User();
    admin.setUsername("Admin");
    admin.setPassword("pegasos");
    admin.setRole("admin");
    userRepository.save(admin);
    
    Reservation reservation = new Reservation();
    reservation.setTrack(1);
    reservation.setTimeBlock(1);
    reservation.setUser(admin);
    reservation.setGroupName("SC Adelboden");
    reservation.setAthletes(10);
    reservationRepository.save(reservation);
    
    Calendar calendar = Calendar.getInstance();
    calendar.set(2019, 9, 5);
    
    Blocker blocker = new Blocker();
    blocker.setTrack(1);
    blocker.setTimeBlock(1);
    blocker.setFromDate(calendar.getTime());
    
    calendar.set(2019, 10, 5);
    blocker.setUntilDate(calendar.getTime());
    blocker.setOpen(true);
    blockerRepository.save(blocker);
  }
}
