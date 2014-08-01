package tutorial.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import tutorial.domain.Person;

/**
 * Created by leituo56 on 7/30/14.
 */
@Controller
@RequestMapping("/person")
public class PersonController {

    //GET

    //raw GET request
    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public String defaultGET(){
        return "Default Controller";
    }

    //GET with URL params, into @RequestParam
    @RequestMapping(value = "/param" , method = RequestMethod.GET)
    @ResponseBody
    public String paramGET(@RequestParam String name, @RequestParam String ssn){
        return "user: " + name + ", ssn: " + ssn;
    }

    //GET with URL param, into an Object
    @RequestMapping(value = "/paramObj", method = RequestMethod.GET)
    @ResponseBody
    public String paramGETObj(Person person){
        return person.toString();
    }

    //GET with path variable, into @PathVariable
    @RequestMapping(value = "/path/{name}/{ssn}", method = RequestMethod.GET)
    @ResponseBody
    public String pathGET(@PathVariable String name, @PathVariable String ssn){
        return "user: " + name + ", ssn: " + ssn;
    }

    //GET combination
    @RequestMapping(value = "GETCombo/{name}", method = RequestMethod.GET)
    @ResponseBody
    public Person GETCombo(Person person, @RequestParam String what){
        System.out.println(what);
        return person;
    }


    //POST

    //POST with URL params, into @RequestParam
    @RequestMapping(value = "/param" , method = RequestMethod.POST)
    @ResponseBody
    public String paramPOST(@RequestParam String name, @RequestParam String ssn){
        return "user: " + name + ", ssn: " + ssn;
    }

    //POST, PUT into an Object
    //work with: URL param, x-www-form-urlencoded

    @RequestMapping(value = "/paramObj/{name}", method = RequestMethod.POST)
    @ResponseBody
    public String paramPOSTObj(Person person){
        return person.toString();
    }

    //POST using JSON, request body
    //URL param is not working in this scenario
    @RequestMapping(value = "/POSTbody/{name}", method = {RequestMethod.POST, RequestMethod.PUT})
    @ResponseBody
    public String POSTObjRequestBody(@RequestBody Person person, @PathVariable String name){
        System.out.println(name);
        return person.toString();
    }

    //POST, PUT multipart
    //Multipart need commons-fileupload and commons-io dependency
    //note that POST could also accept x-www-urlencoded and url param
    //PUT need to rewrite CommonsMultipartResolver, not accept x-www-urlencoded
    @RequestMapping(value = "/multipart/{id}", method = {RequestMethod.POST, RequestMethod.PUT})
    @ResponseBody
    public String POSTtest( Person person, @PathVariable String id){//@RequestParam("file") MultipartFile file){
        System.out.println(id);
        System.out.println(person.getName());
        return person.toString();
    }

}
