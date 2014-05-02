import random
mylist = [12, 5, 13, 8, 9, 65, 1]
mylist2 = [random.randint(0, 101) for i in range(50)]


def merge_sort(unsorted_list):
    length = len(unsorted_list)
    if length <= 1:
        return unsorted_list
    mid = length / 2

    left_list = merge_sort(unsorted_list[:mid])
    right_list = merge_sort(unsorted_list[mid:length])

    result = []
    while len(left_list) > 0 and len(right_list) > 0:
        if left_list[0] > right_list[0]:
            result.append(right_list.pop(0))
        else:
            result.append(left_list.pop(0))
    result += left_list
    result += right_list
    return result


print merge_sort(mylist)
print merge_sort(mylist2)