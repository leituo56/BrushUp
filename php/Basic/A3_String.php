<?php
  $str = 'blah blah blah!';
  $s1 = "       Whatever $str";
  $s2 = '       Whatever $str      ';
//heredoc
$s3 = <<<EOD
Example of string $str
spanning multiple lines
using heredoc syntax.
EOD;
  $result = array(trim($s1), $s2, $s3, 'lenS1'=>strlen($s1));
  print_r($result);

  echo substr($str, 2, 4)."\n";
  echo strpos($str, "!")."\n";
  echo str_replace("h", "H", $str)."\n";

  $arr = array('Hello', 'World!');
  $result = implode(',', $arr)."\n";
  print_r($result);

  $str = "what's your name?";
  echo addslashes($str)."\n";
?>
