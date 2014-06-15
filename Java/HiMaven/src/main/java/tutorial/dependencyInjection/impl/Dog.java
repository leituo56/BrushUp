package tutorial.dependencyInjection.impl;

import tutorial.dependencyInjection.IAnimal;

/**
 * Created by leituo56 on 6/10/14.
 */
public class Dog implements IAnimal {
    @Override
    public void makeSound() {
        System.out.println("Wang wang wang!!!!!");
    }

}
