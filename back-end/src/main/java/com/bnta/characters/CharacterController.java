package com.bnta.characters;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.xml.stream.events.Characters;
import java.util.List;

@RestController
@RequestMapping("chars")
public class CharacterController {
    private CharacterService characterService;

    public CharacterController(CharacterService characterService) {
        this.characterService = characterService;
    }

    // get all characters
    @GetMapping
    public List<Character> getAllCharacters() {
        return characterService.getAllCharacters();
    }

    //get character by id
    @GetMapping("{id}")
    public Character getCharacterById(@PathVariable("id") Integer id) {
        return characterService.getCharacterById(id);
    }

    //randomise by get character by a random id
    @GetMapping("{num}")
    public List<Character> getRandomCharactersByNumber(@PathVariable("num") Integer num) {
        return characterService.getRandomCharactersByNumber(num);
    }

    //get character by hair colour, etc
    @GetMapping("features/{hair}")
    public List<Character> getCharacterByHair(@PathVariable("hair") String hair) {
        return characterService.getCharacterByHair(hair);
    }

    // get character by gender
    @GetMapping("features/{gender}")
    public List<Character> getCharacterByGender(@PathVariable("gender") String gender) {
        return characterService.getCharacterByGender(gender);
    }

    //name
    @GetMapping("features/{name}")
    public Character getCharacterByName(@PathVariable("name") String name) {
        return characterService.getCharacterByName(name);
    }

    //glasses
    @GetMapping("features/{glasses}")
    public Character getCharacterByGlasses(@PathVariable("glasses") String glasses) {
        return characterService.getCharacterByGlasses(glasses);
    }



//piercings
//  beard
//    moustache
//    london?
//    pet
//    hair accessory
//    top colour
//add character

//update character
//delete character


}



