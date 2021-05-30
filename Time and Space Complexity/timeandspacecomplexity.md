## Evaluating time and space complexity of an algorithm

Time and space complexities helps in comparing different algorithms. 
Helps in finding which algorithm is better when both are implementing the same solution.

A simple example:

```
for (i=0;i<=n;i++) {
    //do something
}
```

The above loop has at most n+1 iterations. Considering n to be very large such that 1 is almost nothing as compared to n, we can say the time complexity of the above loop is n. As we are considering the worst case scenario, we denote it as O(N)

#### Loop within a loop:

```
for (i=0;i<=n;i++) {
    for (j=0;j<=n;j++) {
        //do something
    }
}
```

The above code has 2 loops, one inside runs n times and this is repeated further n times. Thus, there are a total of N*N = O(N<sup>2</sup>)

#### Logarithmic time complexity:

```
for (i=n;i>=0;i/=2) {
    //do something
}
```

Here, the variable i is reduced to half in each iteration. Hence, the time complexity is said to be O(log<sub>2</sub>N)

If the number of iterations gets reduced by k after each iteration, the time complexity will be O(log<sub>k</sub>N)

