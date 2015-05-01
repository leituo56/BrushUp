<?php
  class Person{
    public $name = "No Name";
    public $gender;
    private $age;

    public function __construct($name, $gender, $age){
      $this->name = $name;
      $this->gender = $gender;
      $this->age = $age;
      echo 'The class '.__CLASS__." ".$this->name.' was initiated!'."\n";
    }
    public function __destruct(){
      echo 'The class ',__CLASS__,' ',$this->name,' was destructed!'."\n";
    }

    public function speak(){
      echo "Hi, my name is $this->name\n";
    }

    public function __toString(){
      return __CLASS__."[".$this->name."]\n";
    }

  }

  // instanciation, access property and method
  $me = new Person("Steve", "Male", 28);
  echo $me->name."\n";
  $me->speak();
  echo $me;//__toString();

  unset($me->what);
  var_dump($me);

  unset($me); //alt: $me = null;

  echo "End of the File!\n";
?>
