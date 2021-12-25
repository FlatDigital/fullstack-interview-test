package com.exercise.fullstackinterview.dto;

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
public class CommitDto {

  private String message;
  private ZonedDateTime timestamp;
  private int filesChanged;
  private String author;
  private String email;
}
