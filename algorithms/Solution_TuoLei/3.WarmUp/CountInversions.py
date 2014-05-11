__author__ = 'leituo56'
import random


# Good, O(n*log2n)
def count_inversions_good(numbers):
    result, count = sort_and_count(numbers)
    return count


def sort_and_count(numbers):
    length = len(numbers)
    if length <= 1:
        return numbers, 0
    mid = length / 2

    (sorted_left_list, count_left) = sort_and_count(numbers[:mid])
    (sorted_right_list, count_right) = sort_and_count(numbers[mid:length])
    interleave = 0

    result = []  # for storing sorted list
    # Start Merging, O(n)
    while len(sorted_left_list) > 0 and len(sorted_right_list) > 0:
        if sorted_left_list[0] > sorted_right_list[0]:
            result.append(sorted_right_list.pop(0))
            interleave += len(sorted_left_list)  # right elem goes to result means remains left elem bigger then it
        else:
            result.append(sorted_left_list.pop(0))
    result += sorted_left_list
    result += sorted_right_list

    count = count_left + count_right + interleave  #left + right + between them
    return result, count


# Bad, O(n^2)
def count_inversions(numbers):
    result = 0
    for i in range(len(numbers)):
        for j in range(i + 1, len(numbers)):
            if numbers[i] > numbers[j]:
                result += 1
    return result


# Test
mylist = [1, 3, 5, 2, 4, 6]
print mylist
print count_inversions(numbers=mylist)
print count_inversions_good(numbers=mylist)

mylist2 = range(20)
random.shuffle(mylist2)
print mylist2
print count_inversions(numbers=mylist2)
print count_inversions_good(numbers=mylist2)

data = [int(line.strip()) for line in open("IntegerArray.txt", 'r')]
print '###'
print count_inversions_good(numbers=data)
print '###'