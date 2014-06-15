package tutorial.aop;

import org.springframework.stereotype.Component;

/**
 * Created by leituo56 on 6/11/14.
 */

public interface CustomerBo {

    void addCustomer();

    String addCustomerReturnValue();

    void addCustomerThrowException() throws Exception;

    void addCustomerAround(String name);
}
