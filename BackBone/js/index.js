/**
 * Created by leituo56 on 7/2/14.
 */

var Person = Backbone.Model.extend({
    defaults: {
        name:'No name',
        age:0,
        child:'No Child'
    },
    initialize: function(){
        console.log("A new person created!!");
        this.on("change:name", function(model){
            console.log("Changed name to " + model.get("name"));
        })
    },
    urlRoot:'/Person',
    adopt: function( childName){
      this.set({child: childName});
    }
});


var PersonView = Backbone.View.extend({
    tageName:'div',
    id:'steve',
    className:'person',
    initialize: function(){
        this.model.on('change', this.render, this);
        this.model.on('destroy', this.remove, this);
    },
    template: _.template('<p><%= name %></p><p><%= age %></p>' +
        '<% if (age>20) print ("Too Old") %><button>Hello</button>'),
    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
    remove: function(){
        this.$el.remove();
    },
    events:{
        'click button':"sayHi"
    },
    sayHi:function(e){
        alert(this.model.get("name"));
        var age = this.model.get("age");
        this.model.set({age:age+1});
    }
});

var Guild = Backbone.Collection.extend({
    model:Person
});


var GuildView = Backbone.View.extend({
    collection:Guild,
    initialize: function(){
        this.collection.on('add', this.addOne, this);
        this.collection.on('reset', this.addAll, this);
    },
    render: function(){
        this.addAll();
    },
    addAll: function(){
        this.collection.forEach(this.addOne, this);
    },
    addOne: function(item){
        console.log(item.toJSON());
        var personView = new PersonView({model:item});
        this.$el.append(personView.render().el);
    }
});


