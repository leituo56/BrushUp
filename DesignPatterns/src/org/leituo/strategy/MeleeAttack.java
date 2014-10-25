package org.leituo.strategy;

/**
 * Created by leituo56 on 9/22/14.
 */
public class MeleeAttack implements IAttackBehavior {
    @Override
    public void performAttack() {
        System.out.println("Bang Bang Bang!");
    }
}
