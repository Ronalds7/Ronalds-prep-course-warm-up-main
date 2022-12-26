export {};

// function onlyTheAces(arr: string[]): string[] {
//     return arr.filter(it => it === "Ace");
// console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']

interface Counters {
    [key: string]: number; 
}

function findEquals(arr: string[]): string[] {
    const counters: Counters = {};
    const result: string[] = [];
    arr.forEach(it => {
            if(counters[it] && counters[it] === 1) {
            result.push(it);
            counters[it]++;
            return;
        }
        counters[it] = 1
    })
return result;

}
console.log(findEquals(["Ace", "King", "Queen", "Jack", "Ace", "Queen"])); // Expected result: ['Ace', 'Ace']