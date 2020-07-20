function json2str(o) {
    let arr = [];
    const fmt = function (s) {
        if (typeof s == "object" && s !== null) return json2str(s);
        return /^(string)$/.test(typeof s) ? `"${s}"` : s;
    };
    for (var i in o) arr.push(`"${i}":${fmt(o[i])}`);
    return `{${arr.join(",")}}`;
}
const obj = {
    name: "Lily",
    age: 30,
    tel: "132xxxxxxxx",
    address: { city: "beijing", district: "haidian", detail: "dddddddd" },
};
const generatedData = json2str(obj);
