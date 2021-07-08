def constructFenwickTree (custom_list):
    fenwick_tree=[i for i in custom_list]
    for index in range(1, len(custom_list)+1):
        #find the next responsible element
        nextIndex = index + (index & -index)
        #update the responsible element
        if (nextIndex <= len(custom_list)):
            fenwick_tree[nextIndex-1] += fenwick_tree[index-1]

    return fenwick_tree

def pointUpdate (position, fenwick_tree, toAdd):
    if (position > len(custom_list)+1):
        return fenwick_tree
    fenwick_tree[position-1] += toAdd
    nextIndex = position + (position & -position)
    pointUpdate(nextIndex, fenwick_tree, toAdd)
    return fenwick_tree


def prefixSum(position, fenwick_tree):
    sum=0
    while position > 0:
        sum += fenwick_tree[position-1]
        position -= (position & -position)
    return sum

def rangeQuery (start, end, fenwick_tree):
    return prefixSum(end, fenwick_tree) - prefixSum(start-1, fenwick_tree)


custom_list = [3, 4, -2, 7, 3, 11, 5, -8, -9, 2, 4 ,-8]
fenwick_tree = constructFenwickTree(custom_list)


print(fenwick_tree)

updated_tree = pointUpdate(1, fenwick_tree, 5)
# print(updated_tree)

sum = rangeQuery(3, 7, fenwick_tree)
print(sum)
    