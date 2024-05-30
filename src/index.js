/**
 *
 * @param {*} a
 * @param {*} b
 * @returns
 */
function sum(a, b) {
    console.log('test sum in unit');
    return a + b;
}

function foo() {
    console.log('test foo in e2e shard 1');

    const f = false;
    if (f) {
        console.log('uncovered branch');
    }

}

function bar() {
    console.log('test bar in e2e shard 2');
}

function uncovered() {
    console.log('uncovered function');
}


globalThis.myPackageName = {
    sum,
    foo,
    bar,
    uncovered
};

export {
    sum,
    foo,
    bar,
    uncovered
};
