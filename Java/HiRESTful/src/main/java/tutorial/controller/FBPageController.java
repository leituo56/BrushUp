package tutorial.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.client.RestTemplate;
import tutorial.domain.Page;

/**
 * Created by leituo56 on 6/18/14.
 */

@Controller
@RequestMapping ("page")
public class FBPageController {

    @RequestMapping(value = "{name}", method = RequestMethod.GET)
    public String getInfo(@PathVariable String name, ModelMap modelMap){
        RestTemplate restTemplate = new RestTemplate();
        Page page = restTemplate.getForObject("http://graph.facebook.com/"+name, Page.class);
        modelMap.addAttribute("page", page);
        return "FbPage";
    }
}
