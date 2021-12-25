package com.exercise.fullstackinterview.service;

import com.exercise.fullstackinterview.dto.CommitDto;
import com.exercise.fullstackinterview.mapper.ResponseMapper;
import com.exercise.fullstackinterview.model.branches.Branch;
import com.exercise.fullstackinterview.model.commit.CommitResponse;
import com.exercise.fullstackinterview.model.commit.Parent;
import com.exercise.fullstackinterview.webclient.GitWebClient;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import reactor.core.publisher.Flux;

@Service
public class GitService {

  @Autowired
  GitWebClient gitWebClient;

  @Autowired
  ResponseMapper responseMapper;

  public Flux<Branch> getAllBranches() {
    return gitWebClient.getAllBranches();
  }

  public List<CommitDto> getCommits(String branch, String token) {
    Parent[] parents = {Parent.builder().sha(branch).build()};

    List<CommitDto> commits = new ArrayList<>();
    getCommitResponse(CommitResponse.builder().parents(Arrays.asList(parents)).build(), commits,
        token);

    return commits;
  }

  private void getCommitResponse(CommitResponse commitResponse, List<CommitDto> commits,
      String token) {
    if (commitResponse.getParents().isEmpty()) {
      return;
    }

    RestTemplate restTemplate = new RestTemplate();
    HttpHeaders headers = new HttpHeaders();
    headers.setBearerAuth(token);

    HttpEntity<Void> entity = new HttpEntity<>(headers);
    String url = "https://api.github.com/repos/cheo2322/fullstack-interview-test/commits/";

    CommitResponse response = restTemplate.exchange(
        url.concat(commitResponse.getParents().get(0).getSha()), HttpMethod.GET, entity,
        CommitResponse.class).getBody();

    commits.add(responseMapper.responseToDto(response));

    getCommitResponse(Objects.requireNonNull(response), commits, token);
  }
}
