# GOAP Planner

A simple Goal-Oriented Action Planning (GOAP) implementation in JavaScript. This project demonstrates how to dynamically generate a plan from an initial world state to achieve a defined goal using a set of available actions.


## What is GOAP?

GOAP stands for **Goal-Oriented Action Planning**, a decision-making architecture often used in AI systems, especially in games. It allows agents to plan sequences of actions to reach a specific goal based on the current state of the world.


## Project Structure

- **`world.js`**  
  Defines the initial state of the world, available actions, and the desired goal.

- **`planner.js`**  
  Contains the core logic to build a plan that transitions the world from the current state to the goal state.

- **`planner.test.js`**  
  A basic Jest test to ensure the generated plan successfully reaches the goal.


## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed.

### Steps 

```bash
npm install
npm run test
