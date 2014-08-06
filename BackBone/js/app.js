/**
 * Created by leituo56 on 8/5/14.
 */
var MyRouter = Backbone.Router.extend({
    routes:{
        "": 'index',
        "person":'person'
    },
    start: function(){
        Backbone.history.start();
    },
    index: function(){
        var guild = new Guild();
        guild.reset([
            {name:"Alice", age:21},
            {name:"Bob", age:24}
        ]);
        console.log(guild.map(function(item){return item.get('name');}));
        console.log(guild.filter(function(item){return item.get('age')>23;}));

        var guildView = new GuildView({collection:guild});
        guildView.render();
        console.log(guildView.el);
        $('h1').after(guildView.el);

    },
    person: function(){
        var p1 = new Person();
        p1.set({name:"Steve", age:28});
        var p2 = new Person({name:"Jason", age:26});

        console.log(p1.toJSON());
        console.log(p1.get("child"));
        p1.adopt('Eliza');
        console.log(p1.get("child"));

        var steve = new PersonView({model:p1});
        steve.render();
        console.log(steve.el);
        $('h1').after(steve.el);
        console.log(steve.$el);
    }
});

$(document).ready(function(){
    var router = new MyRouter();
    router.start();
});