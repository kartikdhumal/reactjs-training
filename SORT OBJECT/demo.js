const pr = {
    useTabs: true,
    semi: true,
    bracketSpacing: true,
    singleQuote: false,
};

let arr = []
for (let [key, value] of Object.entries(pr)) {
    arr.push([key, value]);
}

arr.sort();
let newObj = {};
arr.forEach(([key, value]) => {
    newObj[key] = value;
})
console.log(newObj);