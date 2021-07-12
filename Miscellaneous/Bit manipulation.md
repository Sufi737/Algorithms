### Binary representation

A decimal representation in binary is (bit)*2^position

For example, 12 = 1100 = 1*2^2 + 1*2^3

### Bitwise operations

AND (&) - returns 1 if both bits are 1 else 0

OR (|) - returns 0 if both bits are 0 else 1

NOT (~) - negates the bit

XOR (^) - returns 0 if both bits same else 1

### Left shift

In left shift we shift bits to the left and append 0 in the end. 

Equivalent to multiplying with 2^k if shifting k bits

Example, 4 = 0100 -> 01000 = 1*2^3 = 8

In python we can simply left shift using <<

So if we want to multiply any number with 2^k, we simply do N << k and it returns N*2^k

### Right shift

In right shift we shift the bits to the right. Equivalent to dividing by 2^k if shifting k bits

In python we simply use >>

### Properties and tricks

#### 1. Finding if a number is a power of 2

If a number is a power of 2, it will always have only one bit set as 1 in the entire binary representation

2 - 0001

4 - 0100

8 - 1000

16 - 10000

We can use this property to find if a number is a power of 2 in constant time

If we have binary representation of x, then x-1 can be obtained by flipping all the bits to the right of the rightmost 1 in x (including the rightmost 1)

For example, we have 12 = 1100 -> flip the right most 1 and also all the bits to the right -> 1011 = 11
    
For 11 -> 1011 -> there are no bits to the right of 1 -> 1010 = 10

So x & (x-1) will return all bits same as x except for the rightmost 1 (because we flipped it and the bits to its right)

    12  ->  1100
    
&   11  ->  1011
    --------------
            1000

Now if a number is power of 2, it will have only one bit set as 1 in its binary form. So for calculating x-1 we will flip that 1, and after doing x & (x-1) it will always return 0

    8   ->  1000

&   7   ->  0111
    --------------
            0000

It's that simple, simply do x & (x-1) and if it returns 0 it is a power of 2


#### 2. Finding all possible subsets of a set

For a given subset of N elements there are 2^N subsets possible. We can represent each element in the set with a bit (either 0 or 1).

For example, if we have set {a, b, b}

000 = {}

001 = {c}

010 = {b}

011 = {b,c}

100 = {a}

101 = {a,c}

110 = {a,b}

111 = {a,b,c}

We can iterate over the binary representation and in each iteration check which bits are set(as 1 or 0) and print those bits from the set

To check if a given bit is set in lets say ith position, we simply AND the number with 2^i. Because powers of 2 only have one bit set as 1 and rest all bits are 0. So ANDing the number with 2^i will give a non-zero number if that bit is set as 1.

Example, for 4 = 0100 we want to find if 2nd bit is set to 1, 4 & 2^2 = 4 & 4 -> 0100 & 0100 which will return 4 (0100) which means its 2nd bit is set

If we do the same operation with any other position lets say 3, then 4 & 2^3 = 4 & 8 = 0100 & 1000 which returns 0

Below is a python implementation:

```python
for i in range(0, 1 << len(custom_list)):
    for j in range(0, len(custom_list)):
        #check if jth bit is set
        if i & (1 << j):
            print(custom_list[j], end=',')

    print("")
```

#### 3. Check if number is odd

Simply do x & 1 and it will return 1 if the number is odd else it will return 0

This is because every odd number has a bit set as 1 in the end

#### 4. Counting the number of 1s in a binary representation

We know that for a given number x, x-1 will have all bits to the right of rightmos 1 flipped. For 0100 (4) -> 0011 (3)

If we AND both of them, it gives us the number of 1s less than the 1s in x

For 4 & 3 -> 0100 & 0011 -> 0000

We need to update this number in a loop until it becomes 0 and count the number of steps required

```python
x=23
count=0
while (x>0):
    x = x & (x-1)
    count+=1

print(count)
```


