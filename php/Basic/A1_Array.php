<?php
  $fruits = array("apple", "banana", "orange");
  $fruits[3] = "candy!";
  $fruits['4'] = "crush!";
  $fruits["whatever"] = "Fuck!";
  print_r($fruits);
  echo $fruits[0].PHP_EOL;
  echo $fruits['1']."\n";

  for($i = 0; $i < count($fruits); $i++){
    echo "The Number ".$i." Fruit is:".$fruits[$i]."\n";
  }

  foreach($fruits as $key=>$value){
    echo "The Key[",$key,"] have value of:".$value."\n";
  }

  function first3(){
    echo "wow, i have 3 numbers\n";
    return array(1,2,3);
  }
  list($one, $two, $three) = first3();//assign like a tuple
  echo $one, " ", $two, " ", $three."\n";

  $func = 'first3';
  $func();

  function fibonacci($size){

  }
?>
