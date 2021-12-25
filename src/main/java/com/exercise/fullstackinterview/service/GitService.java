package com.exercise.fullstackinterview.service;

import com.exercise.fullstackinterview.dto.CommitDto;
import com.exercise.fullstackinterview.mapper.CommitMapper;
import com.exercise.fullstackinterview.model.branches.Branch;
import com.exercise.fullstackinterview.webclient.GitWebClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class GitService {

  @Autowired
  GitWebClient gitWebClient;

  @Autowired
  CommitMapper commitMapper;

  public Flux<Branch> getBranches() {
    return gitWebClient.getBranches();
  }

  public Mono<CommitDto> getCommits(String branch) {
    return gitWebClient.getCommits(branch).map(response -> commitMapper.responseToDto(response)) ;
  }
}
