# These value are truthy
puts '[]' if []
puts '""' if ""
puts 0 if 0

# if returns value
ifReturns = if 1>0
      "1>0"
    elsif
      "1<0"
    end
puts ifReturns

# bad part of default val
def tweet(message, options={})
  puts message
  puts options[:name] if options[:name]
  puts options[:date] if options[:date]
end

tweet('hello',{:name=>'steve', :date=>'2014-08-08'})
tweet('hello',{name:'steve'})

# interesting array syntax
a = []
a << 3
a << 4
puts a.join(',')

class Note
  attr_accessor :title
  attr_reader :create_at
  def initialize(title)
    @title = title
    @create_at = Time.now
  end
  def to_s
    "#{@title}:#{@create_at}"
  end
end

class ImageNote < Note
  attr_accessor :url
  def initialize(title, url)
    @url = url
    super(title)
  end
end

n = Note.new('Hi')
puts n.to_s
i = ImageNote.new('Ho', 'baidu')
puts i.to_s, i.url

def describe_favorites(*games)
  for game in games
    puts "Favorite Game: #{game}"
  end
end
describe_favorites('Mario', 'Contra', 'Metroid')

a = [2,3,4,5,6]
a.each { |item| puts item}
a.each do |item|
  puts item
end

def hello_yield
  yield 'tweet'
  yield 'Whoops'
end
hello_yield{|myarg| puts 'aaa' + myarg}
hello_yield{puts 'bbb'}