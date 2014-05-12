__author__ = 'leituo56'
import random


# Implementation, O(n*log n)
def merge_sort(unsorted_list):
    length = len(unsorted_list)
    if length <= 1:
        return unsorted_list
    mid = length / 2

    # Recurrsively sort left and right
    left_list = merge_sort(unsorted_list[:mid])
    right_list = merge_sort(unsorted_list[mid:length])

    # Merge to the result, O(n)
    result = []
    while len(left_list) > 0 and len(right_list) > 0:
        if left_list[0] > right_list[0]:
            result.append(right_list.pop(0))
        else:
            result.append(left_list.pop(0))
    result += left_list
    result += right_list
    return result


# Test Case
if __name__ == "__main__":
    mylist = [12, 5, 13, 8, 9, 65, 1]
    print merge_sort(unsorted_list=mylist)

    mylist2 = [random.randint(0, 100) for i in range(50)]
    print merge_sort(unsorted_list=mylist2)