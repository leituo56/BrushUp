package tutorial.AutoScan;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by leituo56 on 6/11/14.
 */
@Service
public class CustomerService {

    @Autowired
    CustomerDAO customerDAO;

    @Override
    public String toString() {
        return "CustomerService{" +
                "customerDAO=" + customerDAO +
                '}';
    }
}
