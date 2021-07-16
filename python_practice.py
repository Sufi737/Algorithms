from typing import DefaultDict


class Graph:
    def __init__(self):
        self.graph = DefaultDict(list)

    def addEdge(self, u, v, w):
        newEdge = [v, w]
        self.graph[u].append(newEdge)

newgraph = Graph()
newgraph.addEdge(1, 4, 7)
newgraph.addEdge(1, 3, 3)
newgraph.addEdge(3, 4, 9)
newgraph.addEdge(3, 5, 1)
newgraph.addEdge(2, 5, 2)
newgraph.addEdge(5, 6, 11)
print(newgraph.graph)

