package org.leituo.strategy;

/**
 * Created by leituo56 on 9/22/14.
 */
public abstract class Hero {
    public IAttackBehavior attackBehavior;

    public void show(){
        System.out.println("Hero!");
        this.attack(this.attackBehavior);
    }
    public void attack(IAttackBehavior attackBehavior){
        attackBehavior.performAttack();
    }

    public IAttackBehavior getAttackBehavior() {
        return attackBehavior;
    }

    public void setAttackBehavior(IAttackBehavior attackBehavior) {
        this.attackBehavior = attackBehavior;
    }
}
