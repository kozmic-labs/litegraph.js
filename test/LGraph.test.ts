import {
  LGraph,
  LiteGraph,
} from "../dist/litegraph.es.js";

describe("LegacyLGraph Compatibility Layer", () => {
  test("LGraph can be instantiated", () => {
    const graph = new LGraph({extra: "TestGraph"});
    expect(graph).toBeInstanceOf(LGraph);
    expect(graph.extra).toBe("TestGraph");
  });

  test("LGraph can be extended via prototype", () => {
    const graph = new LGraph();
    // @ts-expect-error Should always be an error.
    LGraph.prototype.newMethod = function () {
      return "New method added via prototype";
    };
    // @ts-expect-error Should always be an error.
    expect(graph.newMethod()).toBe("New method added via prototype");
  });

  test("LegacyLGraph is correctly assigned to LiteGraph", () => {
    expect(LiteGraph.LGraph).toBe(LGraph);
  });
});
