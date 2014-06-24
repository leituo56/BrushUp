# 1.3 Given two strings, write a method to decide if one is a permutation of the other.

# O(n) Implementation
def test_reeorder_str(my_string1, my_string2):
	if len(my_string1) != len(my_string2):
		return False

	char_list = [0] * 256
	for i in range( len(my_string1) ):
		char_list[ ord(my_string1[i]) ] += 1
		char_list[ ord(my_string2[i]) ] -= 1

	# True only when all 0
	for count in char_list:
		if count:
			return False

	return True

# Other solution: Sort(n*log(n))

print test_reeorder_str("god is good", "dog so dogi")
print test_reeorder_str("Hello World!", "My World is good!")