package com.bnta.characters;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("characterRepo")
public class CharacterDAS implements CharacterDAO {

    private JdbcTemplate jdbcTemplate;

    public CharacterDAS(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }

//    @Override
//    public int createPersonalisedTable(){
//        return jdbcTemplate.update(
//                """
//                            CREATE TABLE personalised_characters
//                                    (id SERIAL,
//                                    name VARCHAR(255),
//                                    gender VARCHAR(255),
//                                    hair_colour VARCHAR(255),
//                                    eye_colour VARCHAR(255),
//                                    glasses BOOLEAN,
//                                    piercings BOOLEAN,
//                                    beard BOOLEAN,
//                                    moustache BOOLEAN,
//                                    london BOOLEAN,
//                                    pets BOOLEAN,
//                                    hair_accessory BOOLEAN,
//                                    top_colour VARCHAR(225)
//                                    )
//                        """;
//        )
//    }

//    @Override
//    public int addCharacter(Character character) throws NullPointerException {
//        try {
//            String insertSql = """
//                INSERT INTO personalised_characters(name, gender, hair_colour, eye_colour,
//                        glasses, piercings, beard, moustache, london,
//                        pets, hair_accessory, top_colour)
//                VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
//                """;
//            int result = jdbcTemplate.update(
//                    insertSql,
//                    character.getName(),
//                    character.getGender(),
//                    character.getHairColour(),
//                    character.getEyeColour(),
//                    character.isGlasses(),
//                    character.isPiercings(),
//                    character.isBeard(),
//                    character.isMoustache(),
//                    character.isLondon(),
//                    character.isPets(),
//                    character.isHairAccessory(),
//                    character.getTopColour()
//            );
//            return result;
//
//        } catch(NullPointerException e)  {
//            throw new NullPointerException("Invalid character information entered");
//        }
//    }

    @Override
    public List<Character> getAllCharacters() {
        String sql = """
                SELECT id, name, gender, hair_colour, eye_colour, glasses, piercings, beard, moustache, london, pets, hair_accessory, top_colour
                FROM characters
                """;
        return jdbcTemplate.query(sql, new CharacterRowMapper());
    }

    @Override
    public Character getCharacterById(Integer id) {
        String sql = """
                SELECT id, name, gender, hair_colour, eye_colour,
                        glasses, piercings, beard, moustache, london,
                        pets, hair_accessory, top_colour
                        FROM characters
                        WHERE id = ?
                """;
        // Nelson told us to do this stuff :
        // assign character as only object to list
        List<Character> outputList = jdbcTemplate.query(sql, new CharacterRowMapper(), id);
        // make a stream out of outputList and return first (and only) Character, else return null
        return outputList.stream().findFirst().orElse(null);
    }

    @Override
    public List<Character> getCharacterByHair(String hair) {
        String sql = """
                SELECT id, name, gender, hair_colour, eye_colour,
                        glasses, piercings, beard, moustache, london,
                        pets, hair_accessory, top_colour
                        FROM characters
                        WHERE hair_colour = ?
                """;

        return jdbcTemplate.query(sql, new CharacterRowMapper(), hair);

    }

    @Override
    public List<Character> getCharacterByGender(String gender) {
        String sql = """
                SELECT id, name, gender, hair_colour, eye_colour,
                        glasses, piercings, beard, moustache, london,
                        pets, hair_accessory, top_colour
                        FROM characters
                        WHERE gender = ?
                """;

        return jdbcTemplate.query(sql, new CharacterRowMapper(), gender);
    }

    @Override
    public Character getCharacterByName(String name) {
        String sql = """
                SELECT id, name, gender, hair_colour, eye_colour,
                        glasses, piercings, beard, moustache, london,
                        pets, hair_accessory, top_colour
                        FROM characters
                        WHERE name = ?
                """;
        // Nelson told us to do this stuff :
        // assign character as only object to list
        List<Character> outputList = jdbcTemplate.query(sql, new CharacterRowMapper(), name);
        // make a stream out of outputList and return first (and only) Character, else return null
        return outputList.stream().findFirst().orElse(null);
    }

    @Override
    public List<Character> getCharacterByEyeColour(String eyeColour) {
        String sql = """
                SELECT id, name, gender, hair_colour, eye_colour,
                        glasses, piercings, beard, moustache, london,
                        pets, hair_accessory, top_colour
                        FROM characters
                        WHERE eye_colour = ?
                """;

        return jdbcTemplate.query(sql, new CharacterRowMapper(), eyeColour);
    }

    @Override
    public List<Character> getCharacterByGlasses() {
        String sql = """
                SELECT id, name, gender, hair_colour, eye_colour,
                        glasses, piercings, beard, moustache, london,
                        pets, hair_accessory, top_colour
                        FROM characters
                        WHERE glasses = TRUE
                """;

        return jdbcTemplate.query(sql, new CharacterRowMapper());
    }

    @Override
    public List<Character> getCharacterByPiercings() {
        String sql = """
                SELECT id, name, gender, hair_colour, eye_colour,
                        glasses, piercings, beard, moustache, london,
                        pets, hair_accessory, top_colour
                        FROM characters
                        WHERE piercings = TRUE
                """;

        return jdbcTemplate.query(sql, new CharacterRowMapper());
    }

    @Override
    public List<Character> getCharacterByBeard() {
        String sql = """
                SELECT id, name, gender, hair_colour, eye_colour,
                        glasses, piercings, beard, moustache, london,
                        pets, hair_accessory, top_colour
                        FROM characters
                        WHERE beard = TRUE
                """;

        return jdbcTemplate.query(sql, new CharacterRowMapper());
    }

    @Override
    public List<Character> getCharacterByMoustache() {
        String sql = """
                SELECT id, name, gender, hair_colour, eye_colour,
                        glasses, piercings, beard, moustache, london,
                        pets, hair_accessory, top_colour
                        FROM characters
                        WHERE moustache = TRUE
                """;

        return jdbcTemplate.query(sql, new CharacterRowMapper());
    }

    @Override
    public List<Character> getCharacterByLondon() {
        String sql = """
                SELECT id, name, gender, hair_colour, eye_colour,
                        glasses, piercings, beard, moustache, london,
                        pets, hair_accessory, top_colour
                        FROM characters
                        WHERE london = TRUE
                """;

        return jdbcTemplate.query(sql, new CharacterRowMapper());
    }

    @Override
    public List<Character> getCharacterByPets() {
        String sql = """
                SELECT id, name, gender, hair_colour, eye_colour,
                        glasses, piercings, beard, moustache, london,
                        pets, hair_accessory, top_colour
                        FROM characters
                        WHERE pets = TRUE
                """;

        return jdbcTemplate.query(sql, new CharacterRowMapper());
    }

    @Override
    public List<Character> getCharacterByHairAccessory() {
        String sql = """
                SELECT id, name, gender, hair_colour, eye_colour,
                        glasses, piercings, beard, moustache, london,
                        pets, hair_accessory, top_colour
                        FROM characters
                        WHERE hair_accessory = TRUE
                """;

        return jdbcTemplate.query(sql, new CharacterRowMapper());
    }

    @Override
    public List<Character> getCharacterByTopColour(String topColour) {
        String sql = """
                SELECT id, name, gender, hair_colour, eye_colour,
                        glasses, piercings, beard, moustache, london,
                        pets, hair_accessory, top_colour
                        FROM characters
                        WHERE top_colour = ?
                """;

        return jdbcTemplate.query(sql, new CharacterRowMapper(), topColour);
    }
}