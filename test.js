const assert = require("assert").strict;

function test(fn, cases) {
  for (const fnCase of cases) {
    const [args, output] = fnCase;
    try {
      assert.deepEqual(fn(...args), output);
    } catch (err) {
      console.log(`Test failed for ${fn.name} given [${args}]:`);
      console.error(err.message);
    }
  }
}

const script = process.argv.slice(2)[0];
const { fn, cases } = require(`./${script}.js`);
test(fn, cases);
