<?hh
function sumVector(Vector<int> $vector):int{
	$sum = 0;
	foreach ($vector as $val) {
		$sum += $val;
	}
	return $sum;
}

function removeOdd(Vector<int> $vector):Vector<int>{
	return $vector->map($x ==> ($x % 2 == 0) ? $x : 0 );
}

function pretty(Vector<int> $vector):string{
	return "[ ".implode(", ", $vector)." ]\n<br/>";
}

$vector = Vector {1,2,3,4,5}; //Vector<int>
echo pretty($vector);

echo sumVector($vector)."<br/>\n";

$vector = removeOdd($vector);
echo pretty($vector);

