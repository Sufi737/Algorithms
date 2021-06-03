#### Concept

The GCD (greatest common divisor) is the largest number that divides both. The euclidean algorithm to find GCD is pretty simple: for given 2 numbers, keep on finding the mod when dividing the greater number by smaller number, and replace the greater number with mod

For given two number a and b
if b==0 -> return a as GCD
else: 
    mod = a%b
    a = b
    mod = a

#### Javascript Implementation

```js
function GCD(a, b) {
	if (b==0) {
    	return a;
    } else {
    	return GCD(b, (a%b));
    } 
}

let result = GCD(15,25)
alert(result);
```

#### Time Complexity

O(log(min(a,b)))

#### LCM

We can convert an LCM problem into GCD with the following formula

LCM = (a*b) / GCD(a,b)


