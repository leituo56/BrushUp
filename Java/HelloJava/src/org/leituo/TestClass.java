package org.leituo;

/**
 * Created by leituo56 on 5/7/14.
 */
public class TestClass {
    TestClass(){
        Teacher p = new Professor();
        Teacher ta = new TA();
        p.teach();
        ta.teach();
        System.out.println(ta.toString());
    }
}
class Professor extends Person implements Teacher{
    Professor(){
    }
    public void teach(){
        System.out.println("I'm a Professor, I do research!");
    }
}
class TA extends Student implements Teacher{
    TA(){
    }
    public void teach(){
        System.out.println("I'm a student but I'm teach!");
    }
}
class Student extends Person{
    int id;
    Student(){}
    Student(String name){}
    Student(String name, int id){
        super(name);
        this.id = id;
    }
    public String toString(){
        return super.toString() + "Student:" + id + "\n";
    }
}
class Person{
    String name;
    Person(){
        this("No Name");
    }
    Person(String name){
        this.name = name;
    }
    public String toString(){
        return "Person:" + name + "\n";
    }
}
interface Teacher{
    public void teach();
}