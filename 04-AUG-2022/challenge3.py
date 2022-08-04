# CW

'''
Given an array of integers your solution should find the smallest integer

Example:
[34,15,88,2] -> 2
[34, -345, -1, 100] -> -345
'''

def find_smallest_int(arr):
    # Code here
    return min(arr)

# Another way is to sort the array first and the return the element at the 0th index.