__author__ = 'leituo56'
import random


def merge_sort(unsorted_list):
    length = len(unsorted_list)
    if length <= 1:
        return unsorted_list
    mid = length / 2

    # Split the list, Recurrsively merge left and right
    left_list = merge_sort(unsorted_list[:mid])
    right_list = merge_sort(unsorted_list[mid:length])

    # Merge the result
    result = []
    while len(left_list) > 0 and len(right_list) > 0:
        if left_list[0] > right_list[0]:
            result.append(right_list.pop(0))
        else:
            result.append(left_list.pop(0))
    result += left_list
    result += right_list
    return result

mylist = [12, 5, 13, 8, 9, 65, 1]
mylist2 = [random.randint(0, 101) for i in range(50)]
print merge_sort(unsorted_list=mylist)
print merge_sort(unsorted_list=mylist2)