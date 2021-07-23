from collections import defaultdict
 
class Graph:
    def __init__(self, vertices):
        self.graph = defaultdict(list)
        self.V = vertices 
 
    def addEdge(self, u, v):
        self.graph[u].append(v)

    def DFS(self, node, stack, visited):
        #mark the node as visited
        visited.add(node)

        #recursively call the DFS
        for neighbour in self.graph[node]:
            if neighbour not in visited:
                self.DFS(neighbour, stack, visited)


        #adding the node to stack at the end of DFS
        stack.append(node)

    def topologicalSort(self):
        stack = []
        visited = set()

        for node, edge in list(self.graph.items()):
            if node not in visited:
                self.DFS(node, stack, visited)
                    

        #print the stack
        while stack:
            print(stack.pop())


graph = Graph(6)
graph.addEdge(5, 2)
graph.addEdge(5, 0)
graph.addEdge(4, 0)
graph.addEdge(4, 1)
graph.addEdge(2, 3)
graph.addEdge(3, 1)

graph.topologicalSort()