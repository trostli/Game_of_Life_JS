## Conway's Game of Life - Javascript edition

See it in online [here](http://gameoflife.trostli.net)

The Game of Life is not your typical computer game. It is a 'cellular automaton', and was invented by Cambridge mathematician John Conway in 1970.

The "game" is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. In this version the initial state is randomly determined on load. Each cell has a 50% chance of being either "alive" or "dead".

This implementation is built completely in JavaScript.
Rules:

* Any live cell with fewer than two live neighbors dies, as if caused by under-population.
* Any live cell with two or three live neighbors lives on to the next generation.
* Any live cell with more than three live neighbors dies, as if by overcrowding.
* Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction

Just open index.html to see it in action.
