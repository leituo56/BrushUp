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
import com.datastax.driver.core.*;
import static java.lang.System.out;

/**
 * Created by leituo56 on 5/29/14.
 */
public class HelloWorld {
    private Cluster cluster;
    private Session session;

    public void connect(final String node, final int port){
        this.cluster = Cluster.builder().addContactPoint(node).withPort(port).build();
        final Metadata metadata = cluster.getMetadata();
        out.printf("Connected to cluster: %s\n", metadata.getClusterName());
        for (final Host host : metadata.getAllHosts())
        {
            out.printf("Datacenter: %s; Host: %s; Rack: %s\n",
                    host.getDatacenter(), host.getAddress(), host.getRack());
        }
        session = cluster.connect();
    }
    public Session getSession(){
        return this.session;
    }

    /** Close cluster. */
    public void close(){
        cluster.close();
    }
    public static void main(String[] args){
        System.out.println("Hello World!");
        out.println("Cassandra!");
        final HelloWorld client = new HelloWorld();
        final String ipAddress = "54.244.244.147";
        final int port = args.length > 1 ? Integer.parseInt(args[1]) : 9042;
        out.println("Connecting to IP Address " + ipAddress + ":" + port + "...");
        client.connect(ipAddress, port);
        client.close();

        /*
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
        */
    }
}
