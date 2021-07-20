from typing import Counter


class Graph:
    def __init__(self, n):
        self.graph = [[0 for i in range(n)] for j in range(n)]
        self.nodeCount = n

    def addEdge(self, u, v, w):
        #considering bidirectional graph
        self.graph[u-1][v-1] = w
        self.graph[v-1][u-1] = w

    def BFS(self):
        visited = [0]*self.nodeCount
        queue = [0]
        while queue:
            current_node = queue.pop()
            print(current_node+1)
            visited[current_node] = 1
            for neighbour in range(0, len(self.graph[0])):
                if self.graph[current_node][neighbour] > 0 and visited[neighbour]!=1:
                    queue.append(neighbour)
                    visited[neighbour] = 1
            

newgraph = Graph(8)
newgraph.addEdge(1, 4, 7)
newgraph.addEdge(1, 3, 3)
newgraph.addEdge(3, 4, 9)
newgraph.addEdge(3, 5, 1)
newgraph.addEdge(2, 5, 2)
newgraph.addEdge(5, 6, 11)
newgraph.addEdge(7, 8, 3)

print(newgraph.graph)

newgraph.BFS()