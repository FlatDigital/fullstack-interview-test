package com.exercise.fullstackinterview.service;

import com.exercise.fullstackinterview.model.branches.Branch;
import com.exercise.fullstackinterview.model.commit.CommitResponse;
import com.exercise.fullstackinterview.webclient.GitWebClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;

@Service
public class GitService {

  @Autowired
  GitWebClient gitWebClient;

  public Flux<Branch> getBranches() {
    return gitWebClient.getBranches();
  }

  public Flux<CommitResponse> getCommits() {
    return gitWebClient.getCommits();
  }
}
