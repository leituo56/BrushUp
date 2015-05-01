<?php
  function whatever(){}
  var_dump(function_exists('whatever'));//true

  class however{

  }
  var_dump(class_exists('however'));//true

  //serialize
  class Car {
      public $name = 'car';
      public function wow(){
        $this->name = $this->name."!";
      }
  }
  $a = new Car();
  $a->wow();
  $str = serialize($a); //对象序列化成字符串
  echo $str."\n";
  $b = unserialize($str); //反序列化为对象
  $b->wow();
  var_dump($b);
?>
