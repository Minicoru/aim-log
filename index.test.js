// Function to log the current timestamp in a file with a text message.
const aimlog = require("./index.js");

test("aimlog function returns true", () => {
	expect(aimlog("test")).toBe(true);
	expect(aimlog({ test: "test" })).toBe(true);
	expect(aimlog(["test", "test"])).toBe(true);
	expect(aimlog(1)).toBe(true);
	expect(aimlog(1.1)).toBe(true);
	expect(aimlog(true)).toBe(true);
	expect(aimlog(false)).toBe(true);
	expect(aimlog(null)).toBe(true);
	expect(aimlog(undefined)).toBe(true);
	expect(aimlog(NaN)).toBe(true);
	expect(aimlog(Infinity)).toBe(true);
	expect(aimlog(-Infinity)).toBe(true);
	expect(aimlog(Symbol("test"))).toBe(true);
	expect(aimlog(() => {})).toBe(true);
	expect(aimlog(async () => {})).toBe(true);
	expect(aimlog(function () {})).toBe(true);
	expect(aimlog(class {})).toBe(true);
	expect(aimlog(new Date())).toBe(true);
	expect(aimlog(new Error())).toBe(true);
	expect(aimlog(new Map())).toBe(true);
	expect(aimlog(new Set())).toBe(true);
	expect(aimlog(new WeakMap())).toBe(true);
	expect(aimlog(new WeakSet())).toBe(true);
	expect(aimlog(new Promise(() => {}))).toBe(true);
	expect(aimlog(new Proxy({}, {}))).toBe(true);
	expect(aimlog(new ArrayBuffer(2))).toBe(true);
	expect(aimlog(new Int8Array(2))).toBe(true);
	expect(aimlog(new Uint8Array(2))).toBe(true);
});

test("aimlog function returns true with array", () => {
	expect(
		aimlog(
			true,
			false,
			[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			{ test: "test" },
			null,
			undefined,
			NaN,
			Infinity,
			-Infinity,
			Symbol("test"),
			() => {},
			async () => {},
			function () {},
			class {},
			new Date(),
			new Error(),
			new Map(),
			new Set(),
			new WeakMap(),
			new WeakSet(),
			new Promise(() => {}),
			new Proxy({}, {})
		)
	).toBe(true);
});
