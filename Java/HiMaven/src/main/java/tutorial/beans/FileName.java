package tutorial.beans;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

/**
 * Created by leituo56 on 6/10/14.
 */

public class FileName {
    private String name;
    private String type;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "FileName{" +
                "name='" + name + '\'' +
                ", type='" + type + '\'' +
                '}';
    }
}
