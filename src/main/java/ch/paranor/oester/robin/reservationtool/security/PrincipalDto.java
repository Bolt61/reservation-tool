package ch.paranor.oester.robin.reservationtool.security;

public class PrincipalDto {

  private final String username;
  
  public PrincipalDto(String username) {
    this.username = username;
  }
  
  public String getUsername() {
    return username;
  }
}
