package tutorial.scheduler;

import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.Date;

/**
 * Created by leituo56 on 6/18/14.
 */

@Component
@EnableScheduling
public class TimeTask {

    @Scheduled (fixedRate = 10000)
    public void outputTime(){
        System.out.println("Current Time:" + new Date());
    }
}
