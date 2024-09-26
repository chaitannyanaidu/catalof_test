# Lagrange Interpolation for Polynomial Constant Term

This Node.js script reads a JSON file containing points encoded in various bases, decodes the points, and uses Lagrange interpolation to calculate the constant term (`c`) of the polynomial. 


## Introduction
The script performs the following steps:
1. Reads and parses a JSON file containing the polynomial's roots.
2. Decodes the `y` values encoded in different bases.
3. Uses Lagrange interpolation to compute the polynomial and finds the constant term (`c`).

## Prerequisites
- Node.js installed on your system. You can download it from [Node.js Official Website](https://nodejs.org/).
- Basic knowledge of JSON file structure.

## Usage
1. Clone this repository or download the code files.
2. Create or update the `exam3.json` file with your desired data.
3. Run the script using Node.js:
    ```bash
    node newfile.js
    ```
   
### Input JSON File - 1
The script expects a JSON file exam3.json(sample case) containing points with the following structure:
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
The secret constant 'c' is: 3

![image](https://github.com/user-attachments/assets/ffc30874-468d-4c6a-af74-04e6ddf36f53)

### Input JSON File - 2
The script expects a JSON file exam3.json(2nd case) containing points with the following structure:
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

The secret constant 'c' is: 28735619723864

![image](https://github.com/user-attachments/assets/be503125-e750-4b8e-90c0-e3221775a13b)



