package tutorial.controller;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

/**
 * Created by leituo56 on 5/29/14.
 */

@Controller
@RequestMapping ("/welcome")
public class HelloController {
    @RequestMapping(method = RequestMethod.GET)
    public String index(ModelMap model){
        model.addAttribute("message", "Haha! Spring MVC Hello Wolrd!");
        return "tutorial/hello";
    }

    @RequestMapping(value = "/api", method = RequestMethod.PUT)
    public @ResponseBody String testPut(@RequestBody MyModel myModel){

        System.out.println(myModel);
        System.out.println(myModel.getName());
        System.out.println(myModel.getSsn());
        return myModel.toString();
    }
}



class MyModel{
    private String name;
    private String ssn;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSsn() {
        return ssn;
    }

    public void setSsn(String ssn) {
        this.ssn = ssn;
    }

    @Override
    public String toString() {
        return "MyModel{" +
                "name='" + name + '\'' +
                ", ssn='" + ssn + '\'' +
                '}';
    }
}

