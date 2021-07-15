T = int(input())
while (T>0):
    n1,n2 = [int(x) for x in input().split()]
    if n1 > n2:
        print(">")
    elif n1 < n2:
        print("<")
    else:
        print("=")
    T-=1