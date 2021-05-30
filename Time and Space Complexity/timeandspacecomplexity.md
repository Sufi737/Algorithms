## Evaluating time and space complexity of an algorithm

Time and space complexities helps in comparing different algorithms. 
Helps in finding which algorithm is better when both are implementing the same solution.

A simple example:

```
for (i=0;i<=n;i++) {
    //do something
}
```

The above loop has at most N+1 iterations. Considering N to be very large such that 1 is almost nothing as compared to N, we can say the time complexity of the above loop is n. As we are considering the worst case scenario, we denote it as O(N)

```
for (i=0;i<=n;i++) {
    //do something
}

for (i=0;i<=n;i++) {
    //do something
}
```
The above algorithm has 2 loops so complexity will be O(N+N) = O(2N) = O(N) considering N is very large

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

One more logarithmic example:

```
for (i=0;i<n;i++) {
    for (j=0;j<=n;j*=2) {
        //do something
    }
}
```
The inner loop's complexity is log<sub>2</sub>N and the outer loop's is N. So time complexity = O(N*log<sub>2</sub>N)

In some cases we need to manually calculate the time complexity

```
p=0
for (i=0; p<=n; i++) {
    p+=i;
}
```

Above, the value of p is initially 0, then 1, then 3,5 and so on...until it reaches a value let's say k which is k*(k+1)/2
Assuming p>n, k*(k+1)/2 = n and thus n = k<sup>2</sup> so k is sqrt(n) and hence time complexity is O(sqrt(n))

#### To summarise we have below classes of time functions:

1. O(1) - constant
2. O(logn) - logarithmic
3. O(n) - linear
4. O(n<sup>2</sup>) - Quadratic
5. O(n<sup>3</sup>) - Exponential
6. O(2<sup>n</sup>)

#### Order

1 < logn < sqrt(n) < n < nlogn < n<sup>2</sup> < ... < 2<sup>n</sup> < ....n<sup>n</sup>

(Reference taken from Abdul Bari's Youtube playlist)