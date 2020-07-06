import test from "ava";
import hex2rgb from "../../src/util/convertion/atomic/hex2rgb.js";

test("HEX to RGB convertion, object -> object:", t => {
  t.deepEqual(
    hex2rgb({ r: "AF", g: "12", b: "C6" }),
    { r: 175, g: 18, b: 198 }
  );
  t.deepEqual(
    hex2rgb({ r: "18", g: "AB", b: "8E" }),
    { r: 24, g: 171, b: 142 }
  );
  t.deepEqual(
    hex2rgb({ r: "8", g: "E", b: "C" }),
    { r: 136, g: 238, b: 204 }
  );
  t.deepEqual(
    hex2rgb({ r: "A", g: "0", b: "E" }),
    { r: 170, g: 0, b: 238 }
  );
});

test("HEX to RGB convertion, array -> object:", t => {
  t.deepEqual(
    hex2rgb({ values: [ "AF", "12","C6" ] }),
    { r: 175, g: 18, b: 198 }
  );
  t.deepEqual(
    hex2rgb({ values: [ "18", "AB", "8E" ] }),
    { r: 24, g: 171, b: 142 }
  );
  t.deepEqual(
    hex2rgb({ values: [ "8", "E", "C" ] }),
    { r: 136, g: 238, b: 204 }
  );
  t.deepEqual(
    hex2rgb({ values: [ "A", "0", "E" ] }),
    { r: 170, g: 0, b: 238 }
  );
});

test("HEX to RGB convertion, object -> array:", t => {
  t.deepEqual(
    hex2rgb({ r: "AF", g: "12", b: "C6", asArray: true }),
    [ 175, 18, 198 ]
  );
  t.deepEqual(
    hex2rgb({ r: "18", g: "AB", b: "8E", asArray: true }),
    [ 24, 171, 142 ]
  );
  t.deepEqual(
    hex2rgb({ r: "8", g: "E", b: "C", asArray: true }),
    [ 136, 238, 204 ]
  );
  t.deepEqual(
    hex2rgb({ r: "A", g: "0", b: "E", asArray: true }),
    [ 170, 0, 238 ]
  );
});

test("HEX to RGB convertion, array -> array:", t => {
  t.deepEqual(
    hex2rgb({ values: [ "AF", "12","C6" ], asArray: true }),
    [ 175, 18, 198 ]
  );
  t.deepEqual(
    hex2rgb({ values: [ "18", "AB", "8E" ], asArray: true }),
    [ 24, 171, 142 ]
  );
  t.deepEqual(
    hex2rgb({ values: [ "8", "E", "C" ], asArray: true }),
    [ 136, 238, 204 ]
  );
  t.deepEqual(
    hex2rgb({ values: [ "A", "0", "E" ], asArray: true }),
    [ 170, 0, 238 ]
  );
});

test("HEX to RGB convertion, string -> object:", t => {
  t.deepEqual(
    hex2rgb({ string: "#AF12C6" }),
    { r: 175, g: 18, b: 198 }
  );
  t.deepEqual(
    hex2rgb({ string: "#18AB8E" }),
    { r: 24, g: 171, b: 142 }
  );
  t.deepEqual(
    hex2rgb({ string: "8EC" }),
    { r: 136, g: 238, b: 204 }
  );
  t.deepEqual(
    hex2rgb({ string: "A0E" }),
    { r: 170, g: 0, b: 238 }
  );
});

test("HEX to RGB convertion, string -> array:", t => {
  t.deepEqual(
    hex2rgb({ string: "#AF12C6", asArray: true }),
    [ 175, 18, 198 ]
  );
  t.deepEqual(
    hex2rgb({ string: "#18AB8E", asArray: true }),
    [ 24, 171, 142 ]
  );
  t.deepEqual(
    hex2rgb({ string: "8EC", asArray: true }),
    [ 136, 238, 204 ]
  );
  t.deepEqual(
    hex2rgb({ string: "A0E", asArray: true }),
    [ 170, 0, 238 ]
  );
});
