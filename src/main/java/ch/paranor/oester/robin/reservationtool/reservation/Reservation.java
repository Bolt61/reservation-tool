package ch.paranor.oester.robin.reservationtool.reservation;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import ch.paranor.oester.robin.reservationtool.user.User;

@Entity
@Table(name = "reservations")
public class Reservation {
  
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  
  private int track;
  
  private int timeBlock;
  
  @ManyToOne
  @JoinColumn(name="user_id", referencedColumnName = "id")    
  private User user;
  
  @Size(max = 50)
  private String groupName;
  
  private int athletes;
  
  public Long getId() {
    return id;
  }
  
  public void setId(Long id) {
    this.id = id;
  }
  
  public int getTrack() {
    return track;
  }
  
  public void setTrack(int track) {
    this.track = track;
  }
  
  public int getTimeBlock() {
    return timeBlock;
  }
  
  public void setTimeBlock(int timeBlock) {
    this.timeBlock = timeBlock;
  }
  
  public User getUser() {
    return user;
  }
  
  public void setUser(User user) {
    this.user = user;
  }
  
  public String getGroupName() {
    return groupName;
  }
  
  public void setGroupName(String groupName) {
    this.groupName = groupName;
  }
  
  public int getAthletes() {
    return athletes;
  }
  
  public void setAthletes(int athletes) {
    this.athletes = athletes;
  }
}
