/**
 * Created by leituo56 on 8/2/14.
 */

//functional expression
var double = function(num){
    return num*2;
};
var myArray = [1,2,3,4,5];
console.log(myArray.map(double));

//closure
var attack = function(weapon){
    var times = 0;
    if(weapon=='sword'){
        return function(enemy){
            times++;
            console.log("["+ times + "]Swing a " + weapon +" to " + enemy);
        }
    }else{
        return function(enemy){
            times++;
            console.log("["+ times + "]Simply attack " + enemy + " with a " + weapon);
        }
    }
}
var meleeAttack = attack("sword");
meleeAttack('Goblin');
meleeAttack('Elf');
attack("bow")("Giants");
attack("bow")("Orc");

//closure mistake
var search = function(key, list){
    var returnFunction;
    for(var i = 0; i<list.length; i++){
        if(list[i]==key)
            returnFunction = function(){//this line should be: return function(){
                console.log(key + " is number " + (i+1) + " element of " + list);
            };
    }
    return returnFunction;
}
search(3,[1,2,3,4,5])();

//Hoisting mistake
function hoisting1(){
    function random(){return 1};
    return random();
    function random(){return 2}; // this line will overide the first line
}
console.log(hoisting1());

function hoisting2(){
    var random;
    random = function(){return 1};// this line will execute
    return random();
    random = function(){return 2};
}
console.log(hoisting2());

// Objects
Guild = {
    addMember: function (name){
        this["member"+Guild.size]=name;
        this.size++;
    }
};
Guild.name = "SMTH";
Guild["leader"] = "Han Fang";
Guild.size = 0;
delete Guild.leader;
Guild.addMember("Steve");
Guild.addMember("Jason");
console.log(Guild);
for(key in Guild){
    console.log(key, Guild[key]);
}

//Prototype
//this is not working in node
var shoe = {size:6, gender:'female'};
var slipper = Object.create(shoe);
console.log(shoe, slipper.gender, shoe.isPrototypeOf(slipper));

// Via function
var Box = function(length, width, height){
    this.length = length;
    this.width = width;
    this.height = height;
}
Box.prototype = {
    shape:"square",
    vol:function(){
        return this.length * this.width * this.height;
    }
}
var myBox = new Box(3,4,5);
console.log(myBox, myBox.vol(), myBox.shape);
console.log(myBox.constructor==Box, myBox instanceof Box);

