package com.bnta.characters;

import java.util.List;

public interface CharacterDAO {
    List<Character> getAllCharacters();

    Character getCharacterById(Integer id);

    List<Character> getRandomCharactersByNumber(Integer num);
}
