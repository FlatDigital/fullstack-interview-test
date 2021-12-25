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

  private String sha;
  private String message;
  private String author;
  private ZonedDateTime date;
}
