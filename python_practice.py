class Graph:
    def __init__(self, n):
        self.graph = [[0 for i in range(n)] for j in range(n)]


    def addEdge(self, u, v, w):
        self.graph[u-1][v-1] = w
        self.graph[v-1][u-1] = w

    def DFS(self, node, visited):
        visited.add(node+1)
        print(visited)

        for i in range(len(self.graph[0])):
            if ((i+1) not in visited) and self.graph[node][i] > 0:
                self.DFS(i, visited)


newgraph = Graph(8)
newgraph.addEdge(1, 4, 7)
newgraph.addEdge(1, 3, 3)
newgraph.addEdge(3, 4, 9)
newgraph.addEdge(3, 5, 1)
newgraph.addEdge(2, 5, 2)
newgraph.addEdge(5, 6, 11)
newgraph.addEdge(7, 8, 3)

print(newgraph.graph)

visited = set()
for i in range(0, 8):
    if i not in visited:
        newgraph.DFS(i, visited)