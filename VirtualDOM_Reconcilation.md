# Reconciliation

- The algorithm React uses to diff one tree with another to determine which parts need to be changed.
- Reconciliation is the algorithm behind the virtual DOM.

## Algorithm

    When you render a React application, a tree of nodes that describes the app is generated and saved in memory.

    This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations.

    When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

# [TO LEARN MORE](https://github.com/acdlite/react-fiber-architecture/blob/master/README.md)
