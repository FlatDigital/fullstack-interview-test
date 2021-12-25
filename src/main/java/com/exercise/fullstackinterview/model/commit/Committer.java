package com.exercise.fullstackinterview.model.commit;

import java.time.ZonedDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Committer {

  public String name;
  public String email;
  public ZonedDateTime date;
  public String login;
  public int id;
  public String node_id;
  public String avatar_url;
  public String gravatar_id;
  public String url;
  public String html_url;
  public String followers_url;
  public String following_url;
  public String gists_url;
  public String starred_url;
  public String subscriptions_url;
  public String organizations_url;
  public String repos_url;
  public String events_url;
  public String received_events_url;
  public String type;
  public boolean site_admin;
}
