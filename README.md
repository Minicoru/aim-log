# aim-log

## Description

This is a NPM module to generate logs in a local file y the root of the app where is used.

## usage

´´´ JavaScript
const aimlog = require("aim-log");

aimlog("test")
aimlog({ test: "test" })
aimlog(["test", "test"])
aimlog(1)
aimlog(1.1)
aimlog(true)
aimlog(false)
aimlog(null)
aimlog(undefined)
aimlog(NaN)
aimlog(Infinity)
aimlog(-Infinity)
aimlog(Symbol("test"))
aimlog(() => {})
aimlog(async () => {})
aimlog(function () {})
aimlog(class {})
aimlog(new Date())
aimlog(new Error())
aimlog(new Map())
aimlog(new Set())
aimlog(new WeakMap())
aimlog(new WeakSet())
aimlog(new Promise(() => {}))
aimlog(new Proxy({}, {}))
aimlog(new ArrayBuffer(2))
aimlog(new Int8Array(2))
aimlog(new Uint8Array(2))
´´´

## Installation

As simple as any module of NPM, you just need to execute in your terminal the next command.

´´´ bash
npm install aim-log
´´´

## Test´s with JEST

´´´ log
npx jest ─╯
PASS ./index.test.js
✓ aimlog function returns true (4 ms)

Test Suites: 1 passed, 1 total
Tests: 1 passed, 1 total
Snapshots: 0 total
Time: 0.264 s, estimated 1 s
Ran all test suites.
´´´

### Results as example of the test´s.

´´´ log
2023-04-07T21:05:42.681Z | [Type of Object]: string         | [content]: test
2023-04-07T21:05:42.682Z | [Type of Object]: number         | [content]: 1.1
2023-04-07T21:05:42.682Z | [Type of Object]: boolean        | [content]: true
2023-04-07T21:05:42.682Z | [Type of Object]: boolean        | [content]: false
2023-04-07T21:05:42.682Z | [Type of Object]: object         | [content]: null
2023-04-07T21:05:42.682Z | [Type of Object]: undefined      | [content]: undefined
2023-04-07T21:05:42.683Z | [Type of Object]: number         | [content]: null
2023-04-07T21:05:42.683Z | [Type of Object]: number         | [content]: null
2023-04-07T21:05:42.683Z | [Type of Object]: number         | [content]: null
2023-04-07T21:05:42.683Z | [Type of Object]: symbol         | [content]: undefined
2023-04-07T21:05:42.683Z | [Type of Object]: function       | [content]: undefined
2023-04-07T21:05:42.683Z | [Type of Object]: function       | [content]: undefined
2023-04-07T21:05:42.683Z | [Type of Object]: function       | [content]: undefined
2023-04-07T21:05:42.682Z | [Type of Object]: object         | [content]: {"test":"test"}
2023-04-07T21:05:42.682Z | [Type of Object]: object         | [content]: ["test","test"]
2023-04-07T21:05:42.682Z | [Type of Object]: number         | [content]: 1
2023-04-07T21:05:42.683Z | [Type of Object]: function       | [content]: undefined
2023-04-07T21:05:42.683Z | [Type of Object]: object         | [content]: "2023-04-07T21:05:42.683Z"
2023-04-07T21:05:42.683Z | [Type of Object]: object         | [content]: {}
2023-04-07T21:05:42.684Z | [Type of Object]: object         | [content]: {}
2023-04-07T21:05:42.684Z | [Type of Object]: object         | [content]: {}
2023-04-07T21:05:42.684Z | [Type of Object]: object         | [content]: {}
2023-04-07T21:05:42.684Z | [Type of Object]: object         | [content]: {}
2023-04-07T21:05:42.684Z | [Type of Object]: object         | [content]: {"0":0,"1":0}
2023-04-07T21:05:42.684Z | [Type of Object]: object         | [content]: {"0":0,"1":0}
2023-04-07T21:05:42.683Z | [Type of Object]: object         | [content]: {}
2023-04-07T21:05:42.684Z | [Type of Object]: object         | [content]: {}
2023-04-07T21:05:42.684Z | [Type of Object]: object         | [content]: {}

´´´


# Contact: miarg49@gmail.com