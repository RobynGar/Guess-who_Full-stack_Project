package com.bnta.characters;

import java.util.Objects;

public class Character {
private Integer id;
private String name;
private String gender;
private String hairColour;
private String eyeColour;
private boolean glasses;
private boolean piercings;
private boolean beard;
private boolean moustache;
private boolean london;
private boolean pets;
private boolean hairAccessory;
private String topColour;

public Character (Integer id, String name, String gender, String hairColour, String eyeColour, boolean glasses, boolean piercings, boolean beard,boolean moustache, boolean london, boolean pets, boolean hairAccessory, String topColour){
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.hairColour = hairColour;
    this.eyeColour = eyeColour;
    this.glasses = glasses;
    this.piercings = piercings;
    this.beard = beard;
    this.moustache = moustache;
    this.london = london;
    this.pets = pets;
    this.hairAccessory = hairAccessory;
    this.topColour = topColour;
}

    public Character() {

    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id){
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getHairColour() {
        return hairColour;
    }

    public void setHairColour(String hairColour) {
        this.hairColour = hairColour;
    }

    public String getEyeColour() {
        return eyeColour;
    }

    public void setEyeColour(String eyeColour) {
        this.eyeColour = eyeColour;
    }

    public boolean isGlasses() {
        return glasses;
    }

    public void setGlasses(boolean glasses) {
        this.glasses = glasses;
    }

    public boolean isPiercings() {
        return piercings;
    }

    public void setPiercings(boolean piercings) {
        this.piercings = piercings;
    }

    public boolean isBeard() {
        return beard;
    }

    public void setBeard(boolean beard) {
        this.beard = beard;
    }

    public boolean isMoustache() {
        return moustache;
    }

    public void setMoustache(boolean moustache) {
        this.moustache = moustache;
    }

    public boolean isLondon() {
        return london;
    }

    public void setLondon(boolean london) {
        this.london = london;
    }

    public boolean isPets() {
        return pets;
    }

    public void setPets(boolean pets) {
        this.pets = pets;
    }

    public boolean isHairAccessory() {
        return hairAccessory;
    }

    public void setHairAccessory(boolean hairAccessory) {
        this.hairAccessory = hairAccessory;
    }

    public String getTopColour() {
        return topColour;
    }

    public void setTopColour(String topColour) {
        this.topColour = topColour;
    }

    @Override
    public String toString() {
        return "Character{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", gender='" + gender + '\'' +
                ", hairColour='" + hairColour + '\'' +
                ", eyeColour='" + eyeColour + '\'' +
                ", glasses=" + glasses +
                ", piercings=" + piercings +
                ", beard=" + beard +
                ", moustache=" + moustache +
                ", london=" + london +
                ", pets=" + pets +
                ", hairAccessory=" + hairAccessory +
                ", topColour='" + topColour + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Character character = (Character) o;
        return glasses == character.glasses && piercings == character.piercings && beard == character.beard && moustache == character.moustache && london == character.london && pets == character.pets && hairAccessory == character.hairAccessory && Objects.equals(id, character.id) && Objects.equals(name, character.name) && Objects.equals(gender, character.gender) && Objects.equals(hairColour, character.hairColour) && Objects.equals(eyeColour, character.eyeColour) && Objects.equals(topColour, character.topColour);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, gender, hairColour, eyeColour, glasses, piercings, beard, moustache, london, pets, hairAccessory, topColour);
    }
}



