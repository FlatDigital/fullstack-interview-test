package com.exercise.fullstackinterview.model.commit;

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
public class Commit {

  public Author author;
  public Committer committer;
  public String message;
  public Tree tree;
  public String url;
  public int comment_count;
  public Verification verification;
}
