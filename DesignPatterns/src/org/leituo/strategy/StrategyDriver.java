package org.leituo.strategy;

/**
 * Created by leituo56 on 9/22/14.
 */

//The Strategy Pattern defines a family of algorithms,
//encapsulates each one, and makes them interchangeable.
//Strategy lets the algorithm vary independently from clients that use it.

//Identify the aspects of your application that vary and separate them from what stays the same.
//Program to an interface, not an implementation.
//Favor composition over inheritance

public class StrategyDriver {
    public StrategyDriver() {
        Babarian bab = new Babarian();
        bab.show();

        Archer arc = new Archer();
        arc.show();

        arc.setAttackBehavior(new MeleeAttack());
        arc.show();
    }
}
