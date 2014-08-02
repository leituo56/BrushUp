package org.leituo.spring.domain;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import java.util.Arrays;

/**
 * Created by leituo56 on 7/19/14.
 */

@Component
public class Guild {
    private String name;

    @Qualifier("steve")
    @Autowired
    private Player player;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Guild{" +
                "name='" + name + '\'' +
                ", player=" + player +
                '}';
    }

}
