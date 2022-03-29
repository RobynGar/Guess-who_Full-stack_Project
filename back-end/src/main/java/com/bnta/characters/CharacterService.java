package com.bnta.characters;

import org.springframework.beans.factory.annotation.Qualifier;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Random;

public class CharacterService {
    private CharacterDAO characterDAO;
    public CharacterService(@Qualifier("characterRepo") CharacterDAO characterDAO){
        this.characterDAO = characterDAO;
    };
    public List<Character> getAllCharacters() {


       return characterDAO.getAllCharacters();
    }

    public Character getCharacterById(Integer id) {
        Character output= characterDAO.getCharacterById(id);
        if(output == null){
            throw new CharacterNotFoundException("character with id " + id + " not found");
        }
        return output;
    }

    public List<Character> getRandomCharactersByNumber(Integer max) {
        // empty list we will return that will have the random character in it
        List<Character> randomList = new ArrayList<>();
//        get a random number and use get by id method with this random number
//        and add character with id to random list
        //the random list is what we will be returning
        // check that the id is not already in the list
        //out database will be assigned to a set
        // set the output of get all the characters from out database to a list call allList
        List<Character> allList = characterDAO.getAllCharacters();
        //creating a set of characters and looping through our allList and adding each character to the set
        HashSet<Integer> set = new HashSet<>();
        for (Character character: allList
             ) {
            set.add(character.getId());
        }
        Random random = new Random();

        // int listLength is the length of the randomList which we want to set to whatever num the pass in as argument
        int listLength= 0;
        while(listLength< max){
            // this is getting a numbers between 1-28 (upper bound 28 is the size of our character database)
            int id = 1 + random.nextInt(allList.size());
            //if the set contains the id which has been randomly generated above
            if(set.contains(id)){
                //then add it to the random list which is what we will later return using the character id which is the id-1 as we need to take away one to refer to the character id rather than the index position
                randomList.add(allList.get(id-1));
                // removing the id we have just added from the set so that when the next random number we can not call upon the same id
                set.remove(id);
                //we then increment the listLength which is external to the while loop and is keeping track of how long the list is
                listLength ++;
            }
        }
// develop comment

        return randomList;
    }

    public List<Character> getCharacterByHair(String hair) {
        return null;
    }

    public List<Character> getCharacterByGender(String gender) {
        return null;
    }

    public Character getCharacterByName(String name) {
        return null;
    }

    public List<Character> getCharacterByEyeColour(String eyeColour) {
        return null;
    }

    public List<Character> getCharacterByGlasses() {
        return null;
    }

    public List<Character> getCharacterByPiercings() {
        return null;
    }

    public List<Character> getCharacterByBeard() {
        return null;
    }

    public List<Character> getCharacterByMoustache() {
        return null;
    }

    public List<Character> getCharacterByIsLondon() {
        return null;
    }

    public List<Character> getCharacterByPets() {
        return null;
    }

    public List<Character> getCharacterByHairAccessory() {
        return null;
    }

    public List<Character> getCharacterByTopColour(String topColour) {
        return null;
    }
}
