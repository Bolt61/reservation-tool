package ch.paranor.oester.robin.reservationtool.reservation.blocker;

import java.util.Date;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "blockers")
public class Blocker {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  
  private int track;
  
  private int timeBlock;
  
  @Basic
  @Temporal(value = TemporalType.DATE)
  private Date fromDate;
  
  @Basic
  @Temporal(value = TemporalType.DATE)
  private Date untilDate;
  
  private boolean open;
  
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
  
  public Date getFromDate() {
    return fromDate;
  }
  
  public void setFromDate(Date fromDate) {
    this.fromDate = fromDate;
  }
  
  public Date getUntilDate() {
    return untilDate;
  }
  
  public void setUntilDate(Date untilDate) {
    this.untilDate = untilDate;
  }
  
  public boolean isOpen() {
    return open;
  }
  
  public void setOpen(boolean open) {
    this.open = open;
  }
}
