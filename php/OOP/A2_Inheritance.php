<?php
  class Animal{
    public $name;
    protected $type = "Animal";
    private $Chinese = "动物";

    public static $count = 0;
    public static function clear(){
      Self::$count = 0;
    }

    public function __construct($name){
      $this->name = $name;
      Animal::$count++;
      echo __CLASS__."[$this->name] is constructed\n";
    }
    public function move(){
      echo "Move!!\n";
    }
  }

  class Cat extends Animal{
    public function move($speed = 10){
      parent::$count *= 10;
      parent::move();
      echo "Meow! run run at ".$speed." miles!!\n";
    }
    // No overload in php
  }


  $bird = new Animal("Birdy");
  $bird->move();
  $kitty = new Cat("Hello Kitty");
  $kitty->move();

  echo Animal::$count."\n";
  Animal::clear();
  echo Animal::$count."\n";

  var_dump($kitty);
?>
