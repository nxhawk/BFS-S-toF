# Find path from S to F with BFS Algorithms 

Breadth-first search (BFS) is an algorithm for searching a tree data structure for a node that satisfies a given property. It starts at the tree root and explores all nodes at the present depth prior to moving on to the nodes at the next depth level. Extra memory, usually a queue, is needed to keep track of the child nodes that were encountered but not yet explored.

For example, in a chess endgame a chess engine may build the game tree from the current position by applying all possible moves, and use breadth-first search to find a win position for white. Implicit trees (such as game trees or other problem-solving trees) may be of infinite size; breadth-first search is guaranteed to find a solution node if one exists.

In contrast, (plain) depth-first search, which explores the node branch as far as possible before backtracking and expanding other nodes, may get lost in an infinite branch and never make it to the solution node. Iterative deepening depth-first search avoids the latter drawback at the price of exploring the tree's top parts over and over again. On the other hand, both depth-first algorithms get along without extra memory.

Breadth-first search can be generalized to graphs, when the start node (sometimes referred to as a 'search key') is explicitly given, and precautions are taken against following a vertex twice.

BFS and its application in finding connected components of graphs were invented in 1945 by Konrad Zuse, in his (rejected) Ph.D. thesis on the Plankalkül programming language, but this was not published until 1972. It was reinvented in 1959 by Edward F. Moore, who used it to find the shortest path out of a maze, and later developed by C. Y. Lee into a wire routing algorithm (published 1961).

## Screenshot

### Simple 
![image](https://user-images.githubusercontent.com/92797788/213198243-0e446b65-24d0-4244-a44d-ccdc445bb777.png)

### Prepare
![image](https://user-images.githubusercontent.com/92797788/213200078-4e178ebd-d74b-4055-a3cf-bfaa287bb4e8.png)

### Result
![image](https://user-images.githubusercontent.com/92797788/213200267-3fc7a6d9-4a52-48d2-87bd-18b3f7ecca96.png)


## How to use

* Click "From/To" and tick square in table, you will choice start or end point.
* Click "Mutil" you can mutil choice wall in table ('mousedown and mouseover to use').
* Click "submit" to find path from S to F.
* Click "reset" to reload page.
* Gray is wall, Blue is S, Red is F, Yellow is path, Green trace route.

