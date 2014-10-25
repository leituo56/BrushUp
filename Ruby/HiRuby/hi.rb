class Hi
end

# String and array
a = [1,5,3]
print a.sort
print a
print a.sort!
print a
a.each do |item|
  print item + 1
end
puts
puts a.join '_'

# String sugar
b = 'Steve is good'
b['good'] = 'bad'
puts b # 'Steve is bad'

puts b.include?'is bad' # return true
c = Array.new(3, "Hello #{b}") # #{var} syntax
puts c

print [[1,2,3], [4,5,6], 7, [[8,9], 10]].flatten #cat array
print [1,1,1,2,3,4,3,3].uniq # set()
puts

# Symbol and Maps
books = {}
books['Bible'] = :good
books['C++'] = :fair
books['Java'] = :good
puts books, books.length

ratings = Hash.new(0)
books.values.each { |rate| ratings[rate] += 1 }
puts ratings

my_hash = {
    'key1' => "value1",
    :key2  => "value2",
    3 => "value 3",
    name: 'Steve',
    age: 28
}
print my_hash['key1'], my_hash[:key2], my_hash[:name]
puts my_hash

# Condition
i = 5
if i > 0
  puts 'i>0'
elsif i < 0
  puts 'i<0!'
else
  puts 'i=0'
end

unless i < 0
  puts 'i is not < 0'
end

# Loop
i=0
while i<5
  print i
  i += 1
end
puts 'Done'

i = 0
until i==5
  print i
  i += 1
end
puts 'Done'

for item in (0..5)
  print item
end
puts 'Done'

for item in a
  print item
end
puts 'Done'

# Switch
a = 'What'
case a
  when 1..4, 5
    puts "It's between 1 and 5"
  when 6
    puts "It's 6"
  when String
    puts "You passed a string"
  else
    puts "You gave me #{a} -- I have no idea what to do with that."
end

# Sugar
pretty_girl = true
ugly_girl = false
puts 'I love you!' if pretty_girl
puts 'May I have your phone number?' unless ugly_girl

bff = nil
bff ||= "Steve"
bff ||= "Jason"
puts bff

95.upto(100) { |num| print num, " " }

puts [1, 2, 3].respond_to?(:push)
puts "I love " << "You!"


my_nums = [1, 2, 3]
my_nums.each { |num| num ** 2 }
puts my_nums
my_nums = [1, 2, 3]
my_nums.collect! { |num| num ** 2 }
puts my_nums

def yield_name(name)
  puts "In the method! Let's yield."
  yield("Kim")
  puts "In between the yields!"
  yield(name)
  puts "Block complete! Back in the method."
end
yield_name("Eric") { |n| puts "My name is #{n}." }

cube = Proc.new { |x| x ** 3 }
puts [1, 2, 3].collect!(&cube).join ','
puts [4, 5, 6].map!(&cube).join ','

odd = lambda { |x| x % 2 == 1}
puts [1,2,3,4,5,6].select(&odd).join(',')


# OO
class Language
  def initialize(name, creator)
    @name = name
    @creator = creator
  end

  def description
    puts "I'm #{@name} and I was created by #{@creator}!"
  end
end

ruby = Language.new("Ruby", "Yukihiro Matsumoto")
python = Language.new("Python", "Guido van Rossum")
javascript = Language.new("JavaScript", "Brendan Eich")

ruby.description
python.description
javascript.description

class Computer
  $manufacturer = "Mango Computer, Inc." # global
  @@files = {hello: "Hello, world!"}

  def initialize(username, password)
    @username = username
    @password = password
  end

  def current_user
    @username
  end

  def self.display_files
    @@files # static
  end
end

# Make a new Computer instance:
hal = Computer.new("Dave", 12345)
puts "Current user: #{hal.current_user}"
# @username belongs to the hal instance.
puts "Manufacturer: #{$manufacturer}"
# $manufacturer is global! We can get it directly.
puts "Files: #{Computer.display_files}"
# @@files belongs to the Computer class.


# Mixin
module Action
  def jump
    @distance = rand(4) + 2
    puts "I jumped forward #{@distance} feet!"
  end
end

class Rabbit
  include Action
  attr_reader :name
  def initialize(name)
    @name = name
  end
end

class Cricket
  include Action
  attr_reader :name
  def initialize(name)
    @name = name
  end
end

peter = Rabbit.new("Peter")
jiminy = Cricket.new("Jiminy")

peter.jump
jiminy.jump