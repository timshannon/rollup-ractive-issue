/* jshint  esnext: true*/
import Ractive from "ractive";
import Comp from "./components/comp";

var r = new Ractive({
    el: "body",
    template: "#tMain",
    components: {
        comp: Comp,
    },
});
