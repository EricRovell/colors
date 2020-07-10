import test from "ava";
import ColorParser from "../../src/util/parse/parseColorString.js";

test("Parse HEX string:", t => {

  const parser = new ColorParser();

  t.deepEqual(
    parser.parseString("#1A3"),
    [{
      model: "hex",
      type: "shorthand",
      values: {
        r: "1",
        g: "A",
        b: "3"
      }
    }]
  );

  t.deepEqual(
    parser.parseString("#1A3C"),
    [{
      model: "hex",
      type: "shorthand",
      values: {
        r: "1",
        g: "A",
        b: "3",
        opacity: "C"
      }
    }]
  );

  t.deepEqual(
    parser.parseString("#123ABC"),
    [{
      model: "hex",
      type: undefined,
      values: {
        r: "12",
        g: "3A",
        b: "BC"
      }
    }]
  );

  t.deepEqual(
    parser.parseString("#123ABC8F"),
    [{
      model: "hex",
      type: undefined,
      values: {
        r: "12",
        g: "3A",
        b: "BC",
        opacity: "8F"
      }
    }]
  );

});
