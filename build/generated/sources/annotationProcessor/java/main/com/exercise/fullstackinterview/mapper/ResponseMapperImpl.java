package com.exercise.fullstackinterview.mapper;

import com.exercise.fullstackinterview.dto.CommitDto;
import com.exercise.fullstackinterview.dto.CommitDto.CommitDtoBuilder;
import com.exercise.fullstackinterview.dto.SimpleCommitDto;
import com.exercise.fullstackinterview.dto.SimpleCommitDto.SimpleCommitDtoBuilder;
import com.exercise.fullstackinterview.model.commit.Author;
import com.exercise.fullstackinterview.model.commit.Commit;
import com.exercise.fullstackinterview.model.commit.CommitResponse;
import java.time.ZonedDateTime;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-12-25T10:51:30-0500",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.3.2.jar, environment: Java 11.0.8 (Oracle Corporation)"
)
@Component
public class ResponseMapperImpl implements ResponseMapper {

    @Override
    public CommitDto commitToDto(CommitResponse response) {
        if ( response == null ) {
            return null;
        }

        CommitDtoBuilder commitDto = CommitDto.builder();

        commitDto.sha( response.getSha() );
        commitDto.message( responseCommitMessage( response ) );
        commitDto.author( responseCommitAuthorName( response ) );
        commitDto.timestamp( responseCommitAuthorDate( response ) );
        commitDto.email( responseCommitAuthorEmail( response ) );
        commitDto.filesChanged( ResponseMapper.numberOfFiles( response.getFiles() ) );

        return commitDto.build();
    }

    @Override
    public SimpleCommitDto commitToSimple(CommitResponse commitResponse) {
        if ( commitResponse == null ) {
            return null;
        }

        SimpleCommitDtoBuilder simpleCommitDto = SimpleCommitDto.builder();

        simpleCommitDto.sha( commitResponse.getSha() );
        simpleCommitDto.message( responseCommitMessage( commitResponse ) );
        simpleCommitDto.author( responseCommitAuthorName( commitResponse ) );
        simpleCommitDto.timestamp( responseCommitAuthorDate( commitResponse ) );

        return simpleCommitDto.build();
    }

    private String responseCommitMessage(CommitResponse commitResponse) {
        if ( commitResponse == null ) {
            return null;
        }
        Commit commit = commitResponse.getCommit();
        if ( commit == null ) {
            return null;
        }
        String message = commit.getMessage();
        if ( message == null ) {
            return null;
        }
        return message;
    }

    private String responseCommitAuthorName(CommitResponse commitResponse) {
        if ( commitResponse == null ) {
            return null;
        }
        Commit commit = commitResponse.getCommit();
        if ( commit == null ) {
            return null;
        }
        Author author = commit.getAuthor();
        if ( author == null ) {
            return null;
        }
        String name = author.getName();
        if ( name == null ) {
            return null;
        }
        return name;
    }

    private ZonedDateTime responseCommitAuthorDate(CommitResponse commitResponse) {
        if ( commitResponse == null ) {
            return null;
        }
        Commit commit = commitResponse.getCommit();
        if ( commit == null ) {
            return null;
        }
        Author author = commit.getAuthor();
        if ( author == null ) {
            return null;
        }
        ZonedDateTime date = author.getDate();
        if ( date == null ) {
            return null;
        }
        return date;
    }

    private String responseCommitAuthorEmail(CommitResponse commitResponse) {
        if ( commitResponse == null ) {
            return null;
        }
        Commit commit = commitResponse.getCommit();
        if ( commit == null ) {
            return null;
        }
        Author author = commit.getAuthor();
        if ( author == null ) {
            return null;
        }
        String email = author.getEmail();
        if ( email == null ) {
            return null;
        }
        return email;
    }
}
