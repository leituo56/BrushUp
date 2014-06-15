package tutorial.javaConfig;

import tutorial.dependencyInjection.IAnimal;
import tutorial.dependencyInjection.impl.Dog;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Created by leituo56 on 6/10/14.
 */

@Configuration
public class AppConfig {
    @Bean (name = "animal_javaConfig")
    public IAnimal animalJavaConfig(){
        return new Dog();
    }
}
