package com.bnta.users;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("user")
public class UserDAS implements UserDAO {

    private JdbcTemplate jdbcTemplate;

    public UserDAS(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public User getById(Integer id) {
        return null;
    }

    @Override
    public List<User> getAllUsers() {
        return null;
    }

    @Override
    public User getUserById(Integer id) {

        String sql = """
                SELECT id, user_name, wins
                FROM users WHERE id = ?
                """;
        RowMapper<User> userRowMapper = (rs, rowNum) -> {
            User user = new User(
                    rs.getInt("id"),
                    rs.getString("user_name"),
                    rs.getInt("wins")
            );
            return user;
        };
        User userById = jdbcTemplate.query(sql, userRowMapper, id).get(0);
        return userById;
    }

    @Override
    public Integer addUser(User user) {
        return null;
    }

    @Override
    public User getUserWinsById(Integer id) {
        return null;
    }

    @Override
    public Integer updateUserWins(Integer id, User updatedUser) {
        return null;
    }


    // getById method
}




