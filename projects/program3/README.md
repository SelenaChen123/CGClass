# Program 3: Rasterization 2020

This contains the code for the rasterization program of the Fall 2020 CSC 561 class at NCSU.

**Parts 1 & 2: Properly turned in assignment and render the input triangles, without lighting**

Use rasterization to render unlit triangles, giving each triangle its unmodified diffuse
color (e.g, if the diffuse color of the triangle is (1,0,0), every pixel in it should be
red. Vertex shaders are used to perform viewing and perspective transforms, and fragment
shaders to select the diffuse color. The use of the glMatrix library for creating these
transforms is recommended.

**Part 3: Render the input ellipsoids, without lighting**

Use rasterization to render unlit ellipsoids, giving each ellipsoid its unmodified diffuse
color. There are no ellipsoid primitives available in WebGL, so ellipsoids will be built out
of triangles, then transformed to the right location and size. This is either done
statically with a hardcoded sphere model, or procedurally with a latitude/longitude
parameterization. Then this sphere is scaled to match its ellipsoidal parameters. Again
vertex shaders will be used to perform viewing and perspective transforms, fragment shaders
to select color.

**Part 4: Light the ellipsoids and triangles**

Shade the ellipsoids and triangles using per-fragment shading and the Blinn-Phong
illumination model, using the reflectivity coefficients found in the input files. Use
triangle normals during lighting (which will reveal faceting on your ellipsoids). The
fragment shaders will perform the lighting calculation.

**Part 5: interactively change view**

Use the following key to action table to enable the user to change the view:

 - a and d — translate view left and right along view X
 - w and s — translate view forward and backward along view Z
 - q and e — translate view up and down along view Y
 - A and D — rotate view left and right around view Y (yaw)
 - W and S — rotate view forward and backward around view X (pitch)

To implement these changes the eye, lookAt and lookUp vectors used to form the viewing transform will need to be changed.

**Extra credit: Smooth shading with vertex normals**

Using only triangle normals, the ellipsoids and other curved shapes will look
disappointingly faceted. To represent curvature more accurately, vertex normals are needed.
As the ellipsoids are generated from spheres, vertex normals are created by subtracting the
surface point from the sphere center. When triangles are read in, vertex normals are
checked in the input file. As the composited modeling, viewing, and projection matrices are
applied to the vertices, the inverse transpose of the modeling transform to the vertex
normals is applied. During lighting, these normals, rather than the face normal, are used.
The rasterizer interpolates them.

_The eye is at (0.5,0.5,-0.5), with a view up vector of [0 1 0] and a look at vector of
[0 0 1]. Locate the window a distance of 0.5 from the eye, and make it a 1x1 square normal
to the look at vector and centered at (0.5,0.5,0), and parallel to the view up vector. With
this scheme, it is assumed that everything in the world is in view if it is located in a
1x1x1 box with one corner at the origin, and another at (1,1,1). A white (1,1,1) (for
ambient, diffuse and specular) light is put at location (-0.5,1.5,-0.5)._