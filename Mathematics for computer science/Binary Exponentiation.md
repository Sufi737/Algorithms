#### Concept
Binary exponentiation allows calculating a<sup>n</sup> in O(log(n)) time complexity instead of O(n).

Instead of multiplying the number by itself, we multiple the previously calculated result with itself in each iteration. For example, for calculating 5<sup>4</sup> as 5 * 5 * 5 * 5 we can do it as (5 *5) = 25, then use this 25 to multiply with itself which eventually gives us 5<sup>4</sup>.

So, in each iteration we will calculate the square and keep on finding the result's square till we arrive at our solution. For example, for finding 3<sup>11</sup> we find 3<sup>2</sup> which is 9, then multiple 9 by itself which gives us 3<sup>4</sup> and so on...

#### Javascript implementation

```js
function binary_exponentiation(a, b) {
	if (b==0) return 1;
    var result = binary_exponentiation(a, Math.floor(b/2));
    if (b%2 != 0) {
    	//as dividing the power by 2 need to add the remaining power
    	return result * result * a; 
    } else {
    	return result * result;
    }
}

let result = binary_exponentiation(3,63);
alert(result);
```

#### Code explaination
The above code is a recursive implementation. We have a base case that if b is 0 just return 1, else repeat the same operation for the power reduced by 2. In each operation we check if the power was an odd number and if yes, multiply once with an extra number or else just multiply the result with itself. The floor operation is to handle when we do 1/2 (it should not return 0.5 but 0)





