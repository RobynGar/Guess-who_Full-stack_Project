package com.bnta.users;

import java.util.List;

public interface UserDAO {
    public User getById(Integer id);
    public List<User> getAllUsers();
    public User getUserById(Integer id);
    public Integer addUser(User user);
    public User getUserWinsById(Integer id);
    public Integer updateUserWins(Integer id, User updatedUser);

}

