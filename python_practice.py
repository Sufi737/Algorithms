class Graph:
    def __init__(self, n):
        self.graph = [[0 for i in range(n)] for j in range(n)]

    def addEdge(self, u, v, w):
        #considering bidirectional graph
        self.graph[u][v] = w

newgraph = Graph(7)
newgraph.addEdge(1, 4, 7)
newgraph.addEdge(1, 3, 3)
newgraph.addEdge(3, 4, 9)
newgraph.addEdge(3, 5, 1)
newgraph.addEdge(2, 5, 2)
newgraph.addEdge(5, 6, 11)
print(newgraph.graph)


