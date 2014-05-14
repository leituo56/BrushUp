__author__ = 'leituo56'
import sys
import random


# 2n comparisons
def second_largest_elem(unsorted_list):
    if len(unsorted_list) < 2:
        return None
    first = unsorted_list[0]
    second = -sys.maxint - 1
    for i in range(1, len(unsorted_list)):
        if unsorted_list[i] >= first:
            second = first
            first = unsorted_list[i]
        elif unsorted_list[i] > second:
            second = unsorted_list[i]
    return second


# Test Case
if __name__ == "__main__":
    mylist = [random.randint(0, 100) for i in range(50)]
    print mylist
    print second_largest_elem(unsorted_list=mylist)