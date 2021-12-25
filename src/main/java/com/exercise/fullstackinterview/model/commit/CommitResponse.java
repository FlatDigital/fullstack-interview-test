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

  private String sha;
  private String node_id;
  private Commit commit;
  private String url;
  private String html_url;
  private String comments_url;
  private Author author;
  private Committer committer;
  private List<Parent> parents;
  private List<File> files;
}
