package com.bnta.users;


import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("user")

public class UserController {
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }


    //Get user
    @GetMapping("{id}")
    public User getUserById(@PathVariable("id") Integer id){
        return userService.getUserById(id);
    }

    //Add user
    @PostMapping()
    public void addUser(@RequestBody User user){
        userService.addUser(user);
    }
    //Get Scores/winsById
    @GetMapping("{id}")
    public User getUserWinsById(@PathVariable("id") Integer id){
        return userService.getUserWinsById(id);
    }

    //Update winsbyid
    @PutMapping("{id}")
    public void updateUserWins(@PathVariable("id") Integer id, @RequestBody User updatedUser) {
        userService.updateUserWins(id, updatedUser);
    }
}


//getallusers?