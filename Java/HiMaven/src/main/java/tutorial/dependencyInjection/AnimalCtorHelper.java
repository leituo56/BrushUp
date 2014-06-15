package tutorial.dependencyInjection;

/**
 * Created by leituo56 on 6/10/14.
 */
public class AnimalCtorHelper {
    IAnimal animal;
    AnimalCtorHelper(IAnimal animal){
        this.animal = animal;
    }
    public void makeSound(){
        this.animal.makeSound();
    }
}
