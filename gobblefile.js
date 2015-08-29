var gobble = require("gobble");
var src = gobble("./src");

module.exports = gobble([
    src,
    js("index.js").moveTo("js"),
]);

function js(page) {
    var jsSrc = gobble("src/js").transform("ractive", {
        type: "es6",
    });

    jsSrc = jsSrc.transform("rollup", {
        entry: page,
        format: "umd",
        external: ["ractive"],
    });

    return jsSrc;
}
