#### Concept
Binary exponentiation allows calculating a<sup>n</sup> in O(log(n)) time complexity instead of O(n).

Instead of multiplying the number by itself, we multiple the previously calculated result with itself in each iteration. For example, for calculating 5<sup>4</sup> as 5 * 5 * 5 * 5 we can do it as (5 *5) = 25, then use this 25 to multiply with itself which eventually gives us 5<sup>4</sup>.

So, in each iteration we will calculate the square and keep on finding the result's square till we arrive at our solution. For example, for finding 3<sup>11</sup> we find 3<sup>2</sup> which is 9, then multiple 9 by itself which gives us 3<sup>4</sup> and so on...