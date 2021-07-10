custom_list = [1,2,4,7,8,9]
target=0


def binarySearch(custom_list, target):
    if (target < custom_list[0]) or (target > custom_list[-1]):
        return None
    left = 0
    right = len(custom_list)-1
    middle = len(custom_list)//2

    while (left<=right):
        if (target == custom_list[middle]):
            break
        if (target < custom_list[middle]):
            right = middle
        else:
            left = middle+1

        middle = (left+right)//2
        
    return middle

print(binarySearch(custom_list, 7))