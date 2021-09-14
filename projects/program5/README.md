# Program 5: Tetris 2020

This contains the code for the tetris program of the Fall 2020 CSC 561 class at NCSU.

**Part 1: Properly turned in assignment**

Work is correctly submitted.

**Part 2: Display the playing field**

The playing environment needed for the game is created and rendered. A rectangular field should be displayed, roughly twice as tall as it is wide, with a small amount of depth. Models should be 3D, and the projection must be perspective.

**Part 3: Display the pieces**

At least five differently shaped tetrominoes, made up of a few smaller shapes (e.g. cubes, spheres), are displayed. The tetrominoes may simply float inside the field. The player should also be able to change their view, using the keyboard or mouse.

**Part 4: Animate the pieces**

The tetrominoes should appear at the top of the field, and move toward the bottom, step by step. When they reach the bottom, they should stop moving.

**Part 5: Add collision detection**

The tetrominoes should also stop moving when they collide with another tetromino. If a falling tetromino would move into an occupied cell, it stops moving, and occupies the cells it spans. As soon as a cell at the top of the field is occupied, the game ends.

**Part 6: Make pieces interactive**

When the user presses the left or right key, the tetromino will translate one step to the left or right. When the user presses the up key, the tetromino will rotate through four orientations (0, 90, 180, 270 degrees), aligned with the playing field. The down key will advance the tetromino several steps downward at once. The space key will move the tetromino immediately to the bottom of the field (or to the topmost tetromino).

**Part 7: Clear layers when full**

When the smaller shapes in several tetrominoes have completely filled a row in the playing field, the smaller shapes disappear, and those above it move down. This delays the end of the game.