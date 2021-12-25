package com.exercise.fullstackinterview.mapper;

import com.exercise.fullstackinterview.dto.CommitDto;
import com.exercise.fullstackinterview.model.commit.CommitResponse;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CommitMapper {

  @Mapping(source = "commit.message", target = "message")
  @Mapping(source = "commit.author.name", target = "author")
  @Mapping(source = "commit.author.date", target = "date")
  CommitDto responseToDto(CommitResponse response);
}
