package com.exercise.fullstackinterview.controller;

import com.exercise.fullstackinterview.dto.BranchDto;
import com.exercise.fullstackinterview.dto.CommitDto;
import com.exercise.fullstackinterview.service.GitService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

@RestController
@RequestMapping("/git-wrapper")
public class GitController {

  @Autowired
  GitService gitService;

  @GetMapping("/initial")
  @ResponseBody
  @ResponseStatus(HttpStatus.OK)
  public Flux<BranchDto> getAllBranches() {
    return gitService.getAllBranches();
  }

  @GetMapping("/commits")
  @ResponseBody
  @ResponseStatus(HttpStatus.OK)
  public List<CommitDto> getCommits(@RequestParam String branch, @RequestHeader String token) {
    return gitService.getCommits(branch, token);
  }
}
