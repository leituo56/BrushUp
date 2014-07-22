package tutorial.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

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
}
