__author__ = 'leituo56'


# Sorted,
def common_elem_sorted(list1, list2):
    result = list()
    i = j = 0
    while i < len(list1) and j < len(list2):
        if list1[i] == list2[j]:
            result.append(list1[i])
            i += 1
            j += 1
        elif list1[i] < list2[j]:
            i += 1
        else:
            j += 1
    return result


# Unsorted, brute algorithem O(n^2)
def common_elem(list1, list2):
    result = list()
    for item in list1:
        for compare in list2:
            if item == compare:
                result.append(item)
    return result


# Test Case
if __name__ == "__main__":
    my_list1 = range(1, 100, 2)
    my_list2 = range(31, 200, 2)
    print(common_elem(my_list1, my_list2))
    print(common_elem_sorted(my_list1, my_list2))