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
public class File {

  private String sha;
  private String filename;
  private String status;
  private String additions;
  private String deletions;
  private String changes;
  private String blob_url;
  private String raw_url;
  private String contents_url;
  private String patch;
}
