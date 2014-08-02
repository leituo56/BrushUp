package org.leituo.spring;

import org.leituo.spring.domain.Guild;
import org.leituo.spring.domain.Player;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Created by leituo56 on 7/18/14.
 */
public class Main {
    public static void main(String[] args){
        System.out.println("Hello World!!");

        ApplicationContext context = new ClassPathXmlApplicationContext(
                new String[] {"applicationContext.xml"});

        Player me = context.getBean("steve", Player.class);
        Player her = context.getBean("alice", Player.class);
        System.out.println(me);
        System.out.println(her);

        Guild smth = context.getBean("guild", Guild.class);
        System.out.println(smth);
    }
}
