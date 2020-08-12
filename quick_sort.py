def quicksort(array):
    if len(array) < 2:
        return array
    else:
        pivot = array[0]
        less = [i for i in array[1:] if i <= pivot]
        greater = [i for i in array[1:] if i > pivot]
        return quicksort(less) + [pivot] + quicksort(greater)


print(quicksort([1, 31, 23, 12, 14, 15, 71, 54, 67, 3, 2, 1, 4444, 432, 1, 2345, 5, 43]))
