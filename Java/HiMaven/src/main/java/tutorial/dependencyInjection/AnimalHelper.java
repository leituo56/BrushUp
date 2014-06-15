package tutorial.dependencyInjection;

/**
 * Created by leituo56 on 6/10/14.
 */
public class AnimalHelper {
    IAnimal animal;

    public void makeSound(){
        animal.makeSound();
    }

    public void setAnimal(IAnimal animal){
        this.animal = animal;
    }
}
