package com.bnta.users;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private UserDAO userDAO;

    public UserService(@Qualifier("user") UserDAO userDAO) {
        this.userDAO = userDAO;
    }

// if the chosen user does not exist i.e. equals null then throw an exception
    public User getUserById(Integer id) {
        User chosenUser = userDAO.getById(id);
        if (chosenUser == null){
            throw new IllegalStateException("User was not found!");
        } else return chosenUser;
    }

    // ----------------------------------------------------------------------------

    // get list of users and see whether this user already exists
    // throw exception if user input is null or empty string
    // throw exception if user is not equal to 1 - can't be added
    public void addUser(User user) {
        List<User> allUsers = userDAO.getAllUsers();
        for (User u : allUsers){
            if (u.getUserName().equals(user.getUserName())){
                throw new IllegalStateException("User already exists");
            }
        }
        if (user.getUserName() == null || user.getUserName() == "") {
            throw new IllegalStateException("Field cannot be empty");
        }
        int add = userDAO.addUser(user);
        if (add != 1){
            throw new IllegalStateException("User could not be added, please try again!");
        }
    }

    // ----------------------------------------------------------------------------

    public User getUserWinsById(Integer id) {
    return null;

    }

    public Integer updateUserWins(Integer id, User updatedUser) {
        return null;
    }
}
