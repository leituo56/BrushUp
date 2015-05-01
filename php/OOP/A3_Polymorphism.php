<?php
  interface ICanEat{
    public function eat(Food $food);
  }

  class Human implements ICanEat{
    public function eat(Food $food){
      echo "Human eat ".$food->taste()."\n";
    }
  }
  class Dog implements ICanEat{
    public function eat(Food $food){
      echo "Dog eat ".$food->taste()."\n";
    }
  }

  abstract class Food{
    public abstract function taste();
    public function whatever(){
      return "What ever!";
    }
  }
  class Banana extends Food{
    public function taste(){
      return "Good Banana!";
    }
  }
  class Taco extends Food{
    public function taste(){
      return "Bad Taco!";
    }
  }

  function feed(ICanEat $target, Food $food){
    $target->eat($food);
  }

  $man = new Human;
  $man->eat(new Taco());
  $puppy = new Dog;
  $puppy->eat(new Banana());

  var_dump($man instanceof ICanEat);
  feed($man, new Banana());
  feed($puppy, new Taco());
?>
