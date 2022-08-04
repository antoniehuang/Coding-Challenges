# CW

'''
Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 -> [7,9,5,8,4,3]
0 -> [0]
'''
def digitize(n):
    numInString = str(n) # Covert int num to string
    numInString = numInString[::-1] # Reverse string
    numReversedArray = []
    
    for i in range(len(numInString)): # String to python list (array)
        numReversedArray.append(int(numInString[i]))
    return numReversedArray