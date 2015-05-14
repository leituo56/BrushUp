<?hh

// ?type means it's nullable
function fibonacci(?int $level):int{
	if($level == null)
		return 0;
	if($level <= 2)
		return 1;
	return fibonacci($level - 1) + fibonacci($level - 2);
}

echo fibonacci(5);
echo "\n<br/>";
echo fibonacci(null);
echo "\n<br/>";
echo fibonacci(20)."\n<br/>";


interface Printable{
	public function display();
}

class Point implements Printable{
	// constructor argument promotion
	public function __construct(
		private float $x,
		private float $y
	) {}

	public function display():string{
		return "Point is: [".$this->x.", ".$this->y."]\n<br/>";
	}
}

$myPoint = new Point(3.0, 1.0);
echo $myPoint->display();

function callPrint<T as Printable> (T $arg):T{
	echo $arg->display();
	return $arg;
}//polymorphism

function callPrint2 (Printable $arg):Printable{
	echo $arg->display();
	return $arg;
}//polymorphism

callPrint($myPoint);
callPrint2($myPoint);

// The type 'this' always points to the most derived type
class MyBaseClass {
  protected int $count = 0;
  public function add1(): this {
    $this->count += 1;
    return $this;
  }
}

class MyDerivedClass extends MyBaseClass {
  public function print_count(): void { echo $this->count; }
}

function test(): void {
  $x = new MyDerivedClass();
  $x->add1()->print_count();
}


// When a type is too long, you can use a type alias.
type Matrix<T> = Vector<Vector<T>>;

function first_row<T>(Matrix<T> $matrix): Vector<T> {
  return $matrix[0];
}

// Tuples represent fixed size arrays.
function my_first_pair((int, bool) $pair): bool {
  list($_, $result) = $pair;
  return $result;
}


// Shapes can be used for arrays with constant string keys.
type my_shape = shape(
  'field1' => int,
  'field2' => bool,
);

function first_shape(): my_shape {
  $result = shape('field1' => 1);
  $result['field2'] = true;
  return $result;
}


// You can specify the types of functions too.
function apply_int<T>( (function(int): T) $callback, int $value): T {
	return $callback($value);
}

/*/XHP
function build_paragraph(string $text, string $style): :div {
  return
    <div style={$style}>
      <p>{$text}</p>
    </div>;
}

echo build_paragraph("Whatever!", "color:'red'");
*/