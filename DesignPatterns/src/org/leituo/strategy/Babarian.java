package org.leituo.strategy;

/**
 * Created by leituo56 on 9/22/14.
 */
public class Babarian extends Hero {

    protected Babarian() {
        this.attackBehavior = new MeleeAttack();
    }

    @Override
    public void show() {
        System.out.println("Babarian!");
        this.attack(this.attackBehavior);
    }
}
