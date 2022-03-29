package com.bnta.characters;

import java.util.List;

public interface CharacterDAO {
    List<Character> getAllCharacters();

    Character getCharacterById(Integer id);

    List<Character> getCharacterByHair(String hair);

    List<Character> getCharacterByGender(String gender);

    Character getCharacterByName(String name);

    List<Character> getCharacterByEyeColour(String eyeColour);

    List<Character> getCharacterByGlasses();

    List<Character> getCharacterByPiercings();

    List<Character> getCharacterByBeard();

    List<Character> getCharacterByMoustache();

    List<Character> getCharacterByLondon();

    List<Character> getCharacterByPets();

    List<Character> getCharacterByHairAccessory();

    List<Character> getCharacterByTopColour(String topColour);
}
