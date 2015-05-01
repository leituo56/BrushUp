<?php
  class Magic{
    public function __construct(){
      echo 'The class '.__CLASS__.' was initiated!'."\n";
    }

    //magic
    public function __clone(){
      $this->name = "Another ".$this->name;
    }
    public function __invoke($x){
      echo "__invoke is called with ".$x."\n";
    }
    public function __call($name, $arguments){
      echo "__calling ".$name." with parameters: " . implode(", ", $arguments)."\n";
    }
    public static function __callStatic($name, $arguments){
      echo "__calling ".$name." with parameters: " . implode(", ", $arguments)."\n";
    }

    // property magic
    public function __get($name){
      return "get property $name";
    }
    public function __set($name, $value){
      echo "Setting the $name to $value\n";
    }
    public function __isset($name){
      echo "__isset $name is called\n";
      return true;
    }
    public function __unset($name){
      echo "__unset $name is called\n";
    }
  }

  $me = new Magic();
  // php magic
  $another = clone $me;
  $me(5);//__invoke();
  $me->nomethod(1,2,"What ever~~");
  Magic::ohmygod(3,4,"Imposible");
  echo $me->what."\n";
  $me->what = magic;
  echo isset($me->what);
  echo empty($me->what);
?>
