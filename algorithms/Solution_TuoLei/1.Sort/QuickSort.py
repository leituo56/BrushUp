__author__ = 'leituo56'
import random


# Implementation, avg O(n*log n)
def quick_sort(my_list):
    partition(my_list, 0, len(my_list))


# Partition the list
def partition(my_list, start, end):
    if start >= end:
        return
    pivot = my_list[start]
    small_index = start + 1
    for index in range(start + 1, end):
        if my_list[index] < pivot:
            # Swap
            temp = my_list[small_index]
            my_list[small_index] = my_list[index]
            my_list[index] = temp
            small_index += 1
        else:
            pass
    # Swap pivot and small index
    temp = my_list[start]
    my_list[start] = my_list[small_index - 1]
    my_list[small_index - 1] = temp

    # Recursive sort less than Pivot and greater than Pivot
    partition(my_list, start, small_index - 1)
    partition(my_list, small_index, end)


# Test Case
if __name__ == "__main__":
    mylist = [12, 5, 13, 8, 9, 65, 1]
    quick_sort(my_list=mylist)
    print mylist

    mylist2 = [random.randint(0, 100) for i in range(50)]
    quick_sort(my_list=mylist2)
    print mylist2