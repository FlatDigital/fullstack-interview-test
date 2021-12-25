package com.exercise.fullstackinterview.model.branches;

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
public class Branch {

  public String name;
  public Commit commit;
  public boolean protectedValue;
}
