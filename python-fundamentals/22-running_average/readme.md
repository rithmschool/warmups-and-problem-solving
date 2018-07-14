Create a function running_average that returns a function. When the function returned is passed a value, the function returns the current average of all previous function calls. You will have to use closure to solve this. You should round all answers to the 2nd decimal place.

Examples

```py
rAvg = running_average()
rAvg(10)  # 10.0
rAvg(11)  # 10.5
rAvg(12)  # 11.0

rAvg2 = running_average()
rAvg2(1)  # 1
rAvg2(3)  # 2
```
