Write a function called threePartSum.

Given a number n, we can divide it in only three parts n/2, n/3 and n/4.
We will consider integers only: i.e. the Math.floor() of these values).

After dividing the original number into three numbers, divide each of the three numbers into three numbers, and so on.

Return the maximum attainable sum by recursively breaking the numbers into three parts.

threePartSum(12) // 13
/\*

1.  We break n = 12 into three parts [12/2, 12/3, 12/4],
    which becomes [6, 4, 3]. Those parts sum up to 13.
    Since 13 is greater than the original value 12,
    our largest value so far is 13.

2.  Next, we try to get a greater sum again. We break n = 6
    into three parts [6/2, 6/3, 6/4], which becomes [3, 2, 1].
    This sum is 6, which is not greater than the original
    value we broke down, therefore we keep 6 as it is.

3.  We also try n = 4 but the maximum sum is only 4.

4.  We also try n = 3 but the maximum sum is only 3.

5.  Therefore, after breaking all the parts down,
    the maximum sum is still 13 from step 1, which is our answer.
    \*/

threePartSum(24) // 27
/_
We break n = 24 into three parts [24/2, 24/3, 24/4],
which becomes [12, 8, 6]. Those parts sum up to 26.
As seen in the previous example, 12 can go up to 13
by breaking it down. But 8 and 6 cannot be broken up
further. So the result is 13 + 8 + 6 = 27.
_/

threePartSum(23) // 23
/_
We break n = 23 into three parts [23/2, 23/3, 23/4],
which gets us [11, 7, 5]. We're still at 23, and breaking
these down will not get us any larger, so the original
number of 23 stands.
_/

threePartSum(48) // 57
threePartSum(43824) // 84399

Time Complexity - O(n)
Space Complexity - O(n)
