import test from "ava";
import ColorParser from "../../src/util/parse/parseColorString.js";

test("Parse RGB string:", t => {

  const parser = new ColorParser();

  t.deepEqual(
    parser.parseString("rgb 101 255 68"),
    [{
      model: "rgb",
      type: "absolute",
      values: {
        r: "101",
        g: "255",
        b: "68",
        opacity: undefined
      }
    }]
  );

  

});
