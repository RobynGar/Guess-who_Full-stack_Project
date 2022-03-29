package com.bnta.characters;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CharacterRowMapper implements RowMapper<Character> {

    @Override
    public Character mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new Character(
                rs.getInt("id"),
                rs.getString("name"),
                rs.getString("gender"),
                rs.getString("har_colour"),
                rs.getString("eye_colour"),
                rs.getBoolean("glasses"),
                rs.getBoolean("piercings"),
                rs.getBoolean("beard"),
                rs.getBoolean("moustache"),
                rs.getBoolean("london"),
                rs.getBoolean("pets"),
                rs.getBoolean("hair_accessory"),
                rs.getString("top_colour")
        );
    }

}
