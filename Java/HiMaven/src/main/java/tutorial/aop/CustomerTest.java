package tutorial.aop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by leituo56 on 6/11/14.
 */
@Service
public class CustomerTest {

    CustomerBo cb;

    @Autowired
    CustomerTest(CustomerBo cb){
        this.cb = cb;
        System.out.println("Customer Test Running!");
        cb.addCustomerAround("Hi!!!!!!This is a test");
    }

    public void sayHello(){
        System.out.println("Hello Customer Test!");
    }
}
