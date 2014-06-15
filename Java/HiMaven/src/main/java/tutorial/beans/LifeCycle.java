package tutorial.beans;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

/**
 * Created by leituo56 on 6/10/14.
 */
public class LifeCycle {
    private String prop;

    public String getProp() {
        return prop;
    }

    public void setProp(String prop) {
        this.prop = prop;
    }

    @PostConstruct
    public void init(){
        System.out.println("Start to init!");
    }

    @PreDestroy
    public void cleanUp(){
        System.out.println("Container destroyed!");
    }
}
