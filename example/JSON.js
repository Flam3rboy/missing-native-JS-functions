require("../dist/JSON");

const bigint = { test: 234986234982634923423n };
bigint.circular = { obj: bigint };

console.log("stringify bigint and circular object:", JSON.stringify(bigint));