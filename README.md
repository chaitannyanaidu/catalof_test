

# Lagrange Interpolation for Polynomial Constant Term

This Node.js script reads a JSON file containing polynomial points encoded in various bases, decodes them, and uses Lagrange interpolation to calculate the constant term (`c`) of the polynomial.


## Introduction
This script performs the following steps:
1. Reads and parses a JSON file containing the polynomial's roots and encoded points.
2. Decodes the `y` values from their specified bases.
3. Uses Lagrange interpolation to compute the polynomial's constant term (`c`).


### Example 1
Sample JSON input (`exam3.json`):
```json
{
    "keys": {
        "n": 4,
        "k": 3
    },
    "1": {
        "base": "10",
        "value": "28735619723837"
    },
    "2": {
        "base": "16",
        "value": "1A228867F0CA"
    },
    "3": {
        "base": "12",
        "value": "32811A4AA0B7B"
    }
}
```

**Output**: 
```
The secret constant 'c' is: 3
```

### Example 2
test case 2 (`exam4.json`):
```json
{
    "keys": {
        "n": 9,
        "k": 6
    },
    "1": {
        "base": "10",
        "value": "28735619723837"
    },
    "2": {
        "base": "16",
        "value": "1A228867F0CA"
    },
    "3": {
        "base": "12",
        "value": "32811A4AA0B7B"
    },
    "4": {
        "base": "11",
        "value": "917978721331A"
    },
    "5": {
        "base": "16",
        "value": "1A22886782E1"
    },
    "6": {
        "base": "10",
        "value": "28735619654702"
    },
    "7": {
        "base": "14",
        "value": "71AB5070CC4B"
    },
    "8": {
        "base": "9",
        "value": "122662581541670"
    },
    "9": {
        "base": "8",
        "value": "642121030037605"
    }
}
```


**Output**: 
```
The secret constant 'c' is: 28735619723864
```

## Output
The script outputs the calculated constant term (`c`) using the provided points and Lagrange interpolation.

## Screenshots
### Example 1
![Example 1 Output](https://github.com/user-attachments/assets/ffc30874-468d-4c6a-af74-04e6ddf36f53)

### Example 2
![Example 2 Output](https://github.com/user-attachments/assets/be503125-e750-4b8e-90c0-e3221775a13b)

