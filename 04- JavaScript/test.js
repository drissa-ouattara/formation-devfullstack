let compteur = 0;

const interval = setInterval(() => {
    compteur++;

    console.log("A" + compteur);

    Promise.resolve().then(() => {
        console.log("P" + compteur);
    });

    if (compteur === 2) {
        clearInterval(interval);
    }
}, 0);

async function test() {
    console.log("B");

    await Promise.resolve();

    console.log("C");

    setTimeout(() => {
        console.log("D");
    }, 0);
}

test();

console.log("E");