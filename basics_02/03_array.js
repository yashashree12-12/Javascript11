console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]

const set = new Set(["foo", "bar", "baz", "foo"]);
Array.from(set);
// [ "foo", "bar", "baz" ]

const map = new Map([
    [1, 2],
    [2, 4],
    [4, 8],
  ]);
  Array.from(map);
  // [[1, 2], [2, 4], [4, 8]]
  
  const mapper = new Map([
    ["1", "a"],
    ["2", "b"],
  ]);
  Array.from(mapper.values());
  // ['a', 'b'];
  
  Array.from(mapper.keys());
  // ['1', '2'];
  