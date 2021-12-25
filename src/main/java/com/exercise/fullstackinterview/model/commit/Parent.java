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
public class Parent {

  private String sha;
  private String url;
  private String html_url;
}
