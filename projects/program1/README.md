# Program 1: Ray Casting 2020

This contains the code for the ray casting program of the Fall 2020 CSC 561 class at NCSU.

**Part 1: Using ray casting to render unlit, colored ellipsoids**

This program uses ray casting to render unlit ellipsoids, with every pixel in each
ellipsoid having the unmodified diffuse color of that ellipsoid (e.g, if the diffuse
color of an ellipsoid is (1,0,0), every pixel in it should be red). You should see
flatly colored ellipses.

**Part 2: Using ray casting to render lit ellipsoids**

This program performs a local Blinn-Phong lighting calculation at each intersection.
You should see ellipses with depth revealed by illumination, in the same locations
and with the same silhouettes as in part 1 of the program.

_All vertex locations are described in world coordinates, meaning they do not require
any transformation. The eye is located at (0.5,0.5,-0.5), with a view up vector of
[0 1 0] and a look at vector of [0 0 1]. The window is located at a distance of 0.5
from the eye. There is also a 1x1 square normal to the look at vector centered at
(0.5,0.5,0) and parallel to the view up vector. With this scheme, you can assume
that everything in the world is in view if it is located in a 1x1x1 box with one
corner at the origin, and another at (1,1,1)._
