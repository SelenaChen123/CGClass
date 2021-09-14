# Program 4: Texture and Transparency 2020

This contains the code for the texture and transparency program of the Fall 2020 CSC 561 class at NCSU.

**Part 1: Properly turned in assignment**

Work is correctly submitted.

**Part 2: Render the input triangles and ellipsoids, textured but without lighting**

Used WebGL to render unlit triangles and ellipsoids, giving each fragment its textured color. Lighting is not performed. Fragment shader is used to find the appropriate color in the texture. UV coordinates are provided with triangle sets, but are generated for ellipsoids. Lattitude and longitude be mapped to [0,1].

**Part 3: Render with texture and lighting**

Improve the renderer to shade fragments by mixing texture with lighting. A simple approach is modulation, which uses the lit fragment Cf to scale the texture Ct: C = CfCt. Toggle across at least two light/texture blending modes (e.g. replace and modulate) when the b key is pressed.

**Part 4: Render with texture, lighting and transparency**

Improve the renderer further by adding transparency (alpha) to its rendering. To avoid transparent objects occluding other objects, opaque objects are first rendered with z-buffering on, then transparent objects with the z-write component of z-buffering off (gl.depthMask(false)).