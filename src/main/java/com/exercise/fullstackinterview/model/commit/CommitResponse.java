package com.exercise.fullstackinterview.model.commit;

import java.util.List;
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
public class CommitResponse {

  public String sha;
  public String node_id;
  public Commit commit;
  public String url;
  public String html_url;
  public String comments_url;
  public Author author;
  public Committer committer;
  public List<Parent> parents;
}
