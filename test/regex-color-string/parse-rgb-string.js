import test from "ava";
import randInt from "../../src/util/math/randInt.js";
import randFloat from "../../src/util/math/randFloat.js";
import ColorParser from "../../src/util/parse/parseColorString.js";

test("Parse RGB string:", t => {

  const parser = new ColorParser();

  // w/o opacity
  for (let i = 0; i < 100; i++) {
    let [ r, g, b ] = [ randInt(101, 255), randInt(101, 255), randInt(101, 255) ];

    // definetly not percentage values
    if (r > 100 && b > 100 && b > 100) {
      t.deepEqual(
        parser.parseString(`rgb ${r} ${g} ${b}`),
        [{
          model: "rgb",
          type: "absolute",
          values: {
            r, g, b
          }
        }]
      );
    }

    // may be as absolute and as percentage values
    else {
      t.deepEqual(
        parser.parseString(`rgb ${r} ${g} ${b}`),
        [
          {
            model: "rgb",
            type: "absolute",
            values: {
              r, g, b
            }
          },
          {
            model: "rgb",
            type: "percentage",
            values: {
              r, g, b
            }
          }
        ]
      );
    }

  }

  // w/ opacity %
  for (let i = 0; i < 100; i++) {
    let [ r, g, b, opacity ] = [ randInt(101, 255), randInt(101, 255), randInt(101, 255), randInt(100) ];

    // definetly not percentage values
    if (r > 100 && b > 100 && b > 100) {
      t.deepEqual(
        parser.parseString(`rgb ${r} ${g} ${b} ${opacity}%`),
        [{
          model: "rgb",
          type: "absolute",
          values: {
            r, g, b, opacity
          }
        }]
      );
    }

    // may be as absolute and as percentage values
    else {
      t.deepEqual(
        parser.parseString(`rgb ${r} ${g} ${b} ${opacity}%`),
        [
          {
            model: "rgb",
            type: "absolute",
            values: {
              r, g, b, opacity
            }
          },
          {
            model: "rgb",
            type: "percentage",
            values: {
              r, g, b, opacity
            }
          }
        ]
      );
    }

  }

  // w/ opacity decimal value
  for (let i = 0; i < 100; i++) {
    let [ r, g, b, opacity ] = [ randInt(101, 255), randInt(101, 255), randInt(101, 255), randFloat(2) ];

    // definetly not percentage values
    if (r > 100 && b > 100 && b > 100) {
      t.deepEqual(
        parser.parseString(`rgb ${r} ${g} ${b} ${opacity}`),
        [{
          model: "rgb",
          type: "absolute",
          values: {
            r, g, b, opacity
          }
        }]
      );
    }

    // may be as absolute and as percentage values
    else {
      t.deepEqual(
        parser.parseString(`rgb ${r} ${g} ${b} ${opacity}`),
        [
          {
            model: "rgb",
            type: "absolute",
            values: {
              r, g, b, opacity
            }
          },
          {
            model: "rgb",
            type: "percentage",
            values: {
              r, g, b, opacity
            }
          }
        ]
      );
    }

  }

  // rgb %, w/o opacity
  for (let i = 0; i < 100; i++) {
    let [ r, g, b ] = [ randInt(100), randInt(100), randInt(100) ];

    t.deepEqual(
      parser.parseString(`rgb ${r}% ${g}% ${b}%`),
      [{
        model: "rgb",
        type: "percentage",
        values: {
          r, g, b
        }
      }]
    );

  }

  // rgb %, w/ % opacity
  for (let i = 0; i < 100; i++) {
    let [ r, g, b, opacity ] = [ randInt(100), randInt(100), randInt(100), randInt(100), randInt(100) ];

    t.deepEqual(
      parser.parseString(`rgb ${r}% ${g}% ${b}% ${opacity}%`),
      [{
        model: "rgb",
        type: "percentage",
        values: {
          r, g, b, opacity
        }
      }]
    );

  }

  // rgb %, w/ decimal opacity
  for (let i = 0; i < 100; i++) {
    let [ r, g, b, opacity ] = [ randInt(100), randInt(100), randInt(100), randInt(100), randFloat(2) ];

    t.deepEqual(
      parser.parseString(`rgb ${r}% ${g}% ${b}% ${opacity}`),
      [{
        model: "rgb",
        type: "percentage",
        values: {
          r, g, b, opacity
        }
      }]
    );

  }

});
