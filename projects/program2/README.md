# Program 2: Intro to WebGL 2020

This contains the code for the intro to WebGL program of the Fall 2020 CSC 561 class at NCSU.

**Parts 1 & 2: Attempt to improve vertex and index array, and render triangles correctly**

The goal is to display the input triangles in the correct position. The shell only renders
the first set of triangles, in solid white. The code is changed to display all the
triangles, improving two arrays: one that describes the vertices and their attributes, and
another that describes the triangles by listing their vertex indices.

**Parts 3 & 4: Attempt to improve the shader, and render the input colors correctly**

The goal is to color the input triangles with their diffuse color. The shell includes basic
shader code that renders everything in white. The shader is changed to accept and use a
parameter, and the code to send the shader a different value for the parameter for each
triangle set.

_We are using WebGL's default view setup, with the eye at the origin, and the window from -1
to 1 horizontally and vertically._