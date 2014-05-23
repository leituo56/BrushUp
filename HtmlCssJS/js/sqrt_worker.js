/**
 * Created by leituo56 on 5/22/14.
 */

init_guess = 0;
result = 0;
function newton_sqrt(val){
    var guess = val;
    guess = guess - (guess * guess - init_guess) / (2 * guess);
    console.log(guess);
    if(guess != result) {
        postMessage(guess);
        setTimeout("newton_sqrt(" + guess + ")", 500);
        result = guess;
    }
}

self.addEventListener("message", function(e) {
    // the passed-in data is available via e.data
    init_guess = e.data;
    newton_sqrt(e.data);
}, false);