package com.bnta.characters;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.NOT_FOUND)
public class CharacterNotFoundException extends RuntimeException{
    public CharacterNotFoundException(String message){
        super(message);
    }
}
