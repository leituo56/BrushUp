package tutorial.hello;

/**
 * Created by leituo56 on 5/29/14.
 */
public class Greeter {
    private String name;

    public void setName(String name){
        this.name = name;
    }

    public void printName(){
        System.out.println("Hello!" + this.name);
    }

    public String sayHello(){
        return "Hello World!";
    }
}
