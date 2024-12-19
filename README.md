# Toy Problem Prerequisite

The project contains three different toy problems, each solving a unique task. These tasks involve basic JavaScript logic and user interaction. The problems are:

1. **Student Grade Generator**
2. **Speed Detector**
3. **Net Salary Calculator**

---

## Overview

This project consists of three challenges where each problem is designed to help practice basic JavaScript skills, such as user input handling, conditionals, and simple calculations. Each challenge is independent and focuses on a different domain: grade calculation, speed monitoring, and salary computation.

---

## Challenge 1: Student Grade Generator

### Problem Description:
Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond to the correct grade, as shown below:

- **A**: Marks > 79
- **B**: Marks between 60 and 79 (inclusive)
- **C**: Marks between 50 and 59 (inclusive)
- **D**: Marks between 40 and 49 (inclusive)
- **E**: Marks less than 40

### File Name:
`student-grade.js`

### How it Works:
- Prompts the user for a number (marks).
- Based on the input, the program will output the corresponding grade (A, B, C, D, E).

---

## Challenge 2: Speed Detector

### Problem Description:
Write a program that takes the speed of a car as input. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/h above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

- If the speed is 80, it should print: "Points: 2".
- If the driver accumulates more than 12 points, the function should print: "License suspended".

### File Name:
`speed-detector.js`

### How it Works:
- Prompts the user for a speed input.
- It calculates how many 5 km/h increments the speed is above the speed limit and determines the number of demerit points.
- If the number of demerit points exceeds 12, it suspends the driver's license.

---

## Challenge 3: Net Salary Calculator

### Problem Description:
Write a program that calculates an individual’s **net salary** by taking inputs for **basic salary** and **benefits**. The program should compute the payee tax (PAYE), NHIF and NSSF deductions, and the final net salary.

- It calculates the **gross salary** as the sum of basic salary and benefits.
- It computes **PAYE** tax, **NHIF** deductions, and **NSSF** deductions, then calculates the final **net salary** after these deductions.

### File Name:
`salary.js`

### How it Works:
- Prompts the user for basic salary and benefits.
- Computes the gross salary, tax deductions, and final net salary based on predefined rates for PAYE, NHIF, and NSSF.
- Outputs the gross salary, tax deductions, and the final net salary.

---

## Installation

Guide users on how to set up the project. Use visual studio for clarity.


### Prerequisites:
To run these programs, you will need to have **Node.js** installed on your system.

- **Node.js**: [Download Node.js](https://nodejs.org/) if you don't have it installed.

### Steps to Run the Project:
1. **Clone the repository** to your local machine:
   ```bash
   git clone git@github.com:ronaldochirchir/weektwo-code-challenge.git

2. **Navigate to the project folder**

```bash
 cd 'weektwo-code-challenge'




