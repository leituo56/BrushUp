package org.leituo.strategy;

/**
 * Created by leituo56 on 9/22/14.
 */
public class Archer extends Hero {
    public Archer(){
        this.attackBehavior = new RangeAttack();
    }

    @Override
    public void show() {
        System.out.println("Archer!");
        this.attack(this.attackBehavior);
    }
}
