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

    //eye colour
    @GetMapping("features/{eyeColour}")
    public List<Character> getCharacterByEyeColour(@PathVariable("eyeColour") String eyeColour) {
        return characterService.getCharacterByEyeColour(eyeColour);
    }

    //glasses
    @GetMapping("features/glasses")
    public List<Character> getCharacterByGlasses() {
        return characterService.getCharacterByGlasses();
    }

    //piercing
    @GetMapping("features/piercings")
    public List<Character> getCharacterByPiercings() {
        return characterService.getCharacterByPiercings();
    }

    //  beard
    @GetMapping("features/beard")
    public List<Character> getCharacterByBeard() {
        return characterService.getCharacterByBeard();
    }

    //    moustache
    @GetMapping("features/moustache")
    public List<Character> getCharacterByMoustache() {
        return characterService.getCharacterByMoustache();
    }

    //    london?
    @GetMapping("features/london")
    public List<Character> getCharacterByIsLondon() {
        return characterService.getCharacterByIsLondon();
    }

    //    pets
    @GetMapping("features/pets")
    public List<Character> getCharacterByPets() {
        return characterService.getCharacterByPets();
    }

    //    hair accessory
    @GetMapping("features/hairAccessory")
    public List<Character> getCharacterByHairAccessory() {
        return characterService.getCharacterByHairAccessory();
    }

    //    top colour
    @GetMapping("features/{topColour}")
    public List<Character> getCharacterByTopColour(@PathVariable("topColour") String topColour) {
        return characterService.getCharacterByTopColour(topColour);
    }
//add character

//update character
//delete character


}



