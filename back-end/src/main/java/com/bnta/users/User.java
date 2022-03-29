package com.bnta.users;

import java.util.Objects;

public class User {
    // create constructor etc for user id, name, score, wins in how many guesses/questions.
    // isAI boolean

    private Integer id;
    private String name;
    private Integer wins;

    public User(Integer id, String name, Integer wins) {
        this.id = id;
        this.name = name;
        this.wins = wins;
    }

    public User(){

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getWins() {
        return wins;
    }

    public void setWins(Integer wins) {
        this.wins = wins;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", wins=" + wins +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(id, user.id) && Objects.equals(name, user.name) && Objects.equals(wins, user.wins);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, wins);
    }
    
}
