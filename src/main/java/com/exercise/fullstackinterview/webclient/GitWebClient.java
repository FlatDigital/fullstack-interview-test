package com.exercise.fullstackinterview.webclient;

import com.exercise.fullstackinterview.model.branches.Branch;
import com.exercise.fullstackinterview.model.error.GitError;
import org.springframework.http.HttpStatus;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClient.RequestBodySpec;
import org.springframework.web.server.ResponseStatusException;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.netty.http.client.HttpClient;

@Component
public class GitWebClient {

  private final WebClient webClient;

  protected GitWebClient() {
    this.webClient = WebClient.builder()
        .baseUrl("https://api.github.com/repos/cheo2322/fullstack-interview-test")
        .clientConnector(new ReactorClientHttpConnector(HttpClient.newConnection().compress(true)))
        .build();
  }

  protected WebClient.RequestBodySpec setUpGetWebClient(String uri) {
    return (RequestBodySpec) this.webClient
        .get()
        .uri(uriBuilder -> uriBuilder.path(uri).build());
  }

  public Flux<Branch> requestUserCreation(String uri) {
    return setUpGetWebClient(uri)
        .retrieve()
        .onStatus(HttpStatus::isError, clientResponse -> clientResponse.bodyToMono(GitError.class)
            .flatMap(errorBody ->
                Mono.error(new ResponseStatusException(HttpStatus.BAD_REQUEST))))
        .bodyToFlux(Branch.class);
  }
}
