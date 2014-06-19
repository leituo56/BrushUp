package tutorial.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import tutorial.domain.Car;

import java.util.ArrayList;
import java.util.List;


/**
 * Created by leituo56 on 6/12/14.
 */
@Controller
@RequestMapping ("/api")
public class RestController {
    //return an Json
    @RequestMapping(value = "cars", method = RequestMethod.GET)
    public @ResponseBody List<Car> cars(){
        List <Car> cars = new ArrayList<Car>();
        for (int i=0;i<5;i++){
            Car car = new Car();
            car.setMake("Toyota");
            car.setModel("Corolla");
            car.setYear(1999+i);
            cars.add(car);
        }
        System.out.println("GET /api/cars/ Car List requested");
        return cars;
    }

    //Service with Path Variable
    @RequestMapping(value = "cars/{name}/{year}", method = RequestMethod.GET)
    public @ResponseBody Car pathCar(
            @PathVariable String name,
            @PathVariable int year){
        Car car = new Car();
        car.setMake(name);
        car.setYear(year);
        return car;
    }

    //Service with Request Param
    @RequestMapping(value = "cars/search", method = RequestMethod.GET)
    public @ResponseBody Car paramCar(
            @RequestParam(value = "make") String make,
            @RequestParam("model") String model,
            @RequestParam(required = false, defaultValue = "1000") int year){
        Car car = new Car();
        car.setMake(make);
        car.setModel(model);
        car.setYear(year);
        return car;
    }

}
