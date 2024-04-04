// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield', 'Ralph'];
cats.pop('Ralph');
console.log(cats);
function destructivelyAppendCat() {
    cats.splice(2, 2, 'Garfield', 'Ralph');
}
function destructivelyPrependCat() {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(){
    let newCat = [...cats, "Broom"];
    return newCat;
}
function prependCat() {
    let newCat = ["Arnold", ...cats];
    return newCat;
}
function removeLastCat() {
    let newCats = cats.slice(0, -1);
    return newCats;
}
function removeFirstCat() {
    let newCats = cats.slice(1);
    return newCats;
}