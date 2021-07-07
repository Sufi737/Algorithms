import math

mainIndex = 0
for i in range (1, 100000):
    number = str(i)
    sum=0
    index=0
    if (len(number)%2 !=0):
        for digit in number:
            digit = int(digit)
            sum+= digit*math.pow(10, index)
            index+=1
        
        if (sum == i):
            mainIndex+=1
            print(str(mainIndex)+' - '+str(i))
    