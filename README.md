# Digital Root Calculator

A simple digital root calculator created with HTML5, CSS, and Javascript. The theme is inspired by Zero Escape: Nine Hours, Nine Persons, Nine Doors, also known as 999, which is where the concept of a digital root became popularized from.

## How it works: Digital Root Example

The digital root of any number is the sum of all individual digits of a number until a single digit is left.

> The digital root of 12345 is 1 + 2 + 3 + 4 + 5 = 15. 
> Since 15 is not a single digit, the process is repeated, 1 + 5 = 6. 
> The digital root of 12345 can also be calculated as 12345 % 9 = 6. 

It can also be obtained by calculating modulus 9.
The calculator computes the latter in order to optimize efficiency.

```javascript
isNine(num){
  if (num%9 == 0)
    this.digitalRoot = 9
  else
    this.digitalRoot = num % 9
}
```
The user may enter in a whole number, or add individual numbers, by clicking on the respective number buttons on the calculator. Instead of calculating the sum, the digital root button simply calculates the digital root.

## Future Todos
* Keyboard integration
* Voice recognition
* Animated Background
* Calculator Frame
* Responsive Side Images

## Contribution
Please check out [this document](https://github.com/airada/digitalroot/blob/master/Contributions.md) for questions contributing!
