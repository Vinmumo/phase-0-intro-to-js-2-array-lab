const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
    return cats;
}
function destructivelyPrependCat(name){
    cats.unshift(name)
    return cats;
}
function destructivelyRemoveLastCat(){
    cats.pop("Garfield")
    return cats;
}
function destructivelyRemoveFirstCat(){
    cats.shift("Milo")
    return cats;
}
function appendCat(name){
    const catss = [...cats,name]
    return catss;
}
function prependCat(name){
    const catss = [name,...cats]
    return catss;
}
function removeLastCat(){  
const catss = cats.slice(0,-1)
    return catss
}
function removeFirstCat(){  
    const catss = cats.slice(1)
        return catss
    }
// Write your solution here!
