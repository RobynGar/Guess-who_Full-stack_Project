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
    public Integer addUser(@RequestBody User user){
        return userService.addUser(user);
    }
    //Get Scores/wins
    //Update wins
}
