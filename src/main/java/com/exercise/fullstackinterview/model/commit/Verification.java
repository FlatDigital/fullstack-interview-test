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
public class Verification {

  public boolean verified;
  public String reason;
  public String signature;
  public String payload;
}
