# 1.1 Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

# Note:
# ord(char) returns an ASCII int
# chr(num) returns an ASCII char

# Python built in set
def unique_char_set(paragraph):
	result = set(paragraph)
	return len(result) == len(paragraph)

# Time O(n), Space O(1), binary array
def unique_char1(paragraph):
	# ASCII has only 256 unique char
	if len(paragraph) > 256:
		return False

	# List to store if it appears
	char_list = [False] * 256

	for letter in paragraph:
		if char_list[ord(letter)]:
			return False
		else:
			char_list[ord(letter)] = True
	return True

# Other: bit manipulation, Sorting(O(n*log(n)) and compare adjasent,  O(n^2) brute force

print unique_char_set("QuickLazyFox!")
print unique_char_set("Seeing is believing!")

print unique_char1("QuickLazyFox")
print unique_char1("Seeing is believing!")
