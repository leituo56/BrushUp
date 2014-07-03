/**
 * Created by leituo56 on 7/2/14.
 */

Person = Backbone.Model.extend({
    defaults: {
        name:'No name',
        age:0,
        child:'No Child'
    },
    initialize: function(){
        console.log("Welcome to this world");
        this.on("change:name", function(model){
            console.log("Changed name to " + model.get("name"));
        })
    },
    adopt: function( childName){
      this.set({child: childName});
    }
});

var p1 = new Person()
p1.set({name:"Steve", age:28});
var p2 = new Person({name:"Jason", age:26})

console.log(p1.get("name"));
console.log(p1.get("child"));
p1.adopt('Eliza');
console.log(p1.get("child"));

$(function(){


});

