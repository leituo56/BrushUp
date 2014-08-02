package tutorial.hello;

import org.springframework.beans.factory.annotation.Autowired;
import tutorial.AutoScan.CustomerService;
import tutorial.aop.CustomerBo;
import tutorial.aop.CustomerTest;
import tutorial.beans.DataStructures;
import tutorial.beans.FileName;
import tutorial.beans.LifeCycle;
import tutorial.dependencyInjection.AnimalCtorHelper;
import tutorial.dependencyInjection.AnimalHelper;
import tutorial.dependencyInjection.IAnimal;
import tutorial.javaConfig.AppConfig;
import org.joda.time.LocalTime;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


/**
 * Created by leituo56 on 5/29/14.
 */
public class HelloWorld {
    public static void main(String[] args){
        //load library form Maven dependencies
        LocalTime t = new LocalTime();
        System.out.println(t);

        Greeter g = new Greeter();
        System.out.println(g.sayHello());

        //Test Spring Beans

        ApplicationContext context = new ClassPathXmlApplicationContext("SpringBeans.xml");
        Greeter myBean = (Greeter) context.getBean("helloBean");
        myBean.printName();

        //Test Dependency Injection
        AnimalHelper myAnimal = (AnimalHelper) context.getBean("animalHelper");
        myAnimal.makeSound();

        //Test Java Configuration
        ApplicationContext context1 = new AnnotationConfigApplicationContext(AppConfig.class);
        IAnimal myAnimal1 = (IAnimal) context1.getBean("animal_javaConfig");
        myAnimal1.makeSound();

        //Test Ctor Dependency Injection
        AnimalCtorHelper myAnimal2 = (AnimalCtorHelper)context.getBean("animalCtorHelper");
        myAnimal2.makeSound();

        //Test Inject values to beans
        FileName f1 = (FileName) context.getBean("fileNameNorm");
        FileName f2 = (FileName) context.getBean("fileNameShort");
        FileName f3 = (FileName) context.getBean("fileNameP");
        System.out.println(f1);
        System.out.println(f2);
        System.out.println(f3);

        //Test Bean Scope
        //Singleton
        FileName f_singleton = (FileName) context.getBean("fileNameSingleton");
        f_singleton.setName("Singleton");
        f_singleton.setType("rar");
        FileName f_singleton2 = (FileName) context.getBean("fileNameSingleton");
        System.out.println(f_singleton);
        System.out.println(f_singleton2);
        //Prototype
        FileName f_prototype = (FileName) context.getBean("fileNamePrototype");
        f_prototype.setName("Prototype");
        f_prototype.setType("exe");
        FileName f_prototype2 = (FileName) context.getBean("fileNamePrototype");
        System.out.println(f_prototype);
        System.out.println(f_prototype2);

        //Test Bean Data Structures
        DataStructures ds = (DataStructures) context.getBean("dataStructure");
        System.out.println(ds);

        //Test Bean Life Cycle
        LifeCycle lc = (LifeCycle) context.getBean("lifeCycle");
        System.out.println(lc);

        //Test AutoScan
        CustomerService customerService = (CustomerService) context.getBean("customerService");
        System.out.println(customerService);

        //Test AspectJ
        CustomerBo customer = (CustomerBo) context.getBean("customerBoImpl");
        customer.addCustomer();
        customer.addCustomerReturnValue();

        CustomerTest test = (CustomerTest) context.getBean("customerTest");
        test.sayHello();

        ((ConfigurableApplicationContext) context).close();

    }
}
