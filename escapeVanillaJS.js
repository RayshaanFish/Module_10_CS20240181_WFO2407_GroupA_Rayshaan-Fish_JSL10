document.addEventListener("DOMContentLoaded", () => {
    // 🪲 Bug: Incorrect ID used for attaching the event listener ***updated ID to 'solveRoom1' - was missing '1'
    document.getElementById("solveRoom1").addEventListener("click", () => {
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books);
                // 🪲 Bug: Incorrect element ID ***ID was 'resultRoom1' changed to 'room1Result'
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });

    document.getElementById("solveRoom2").addEventListener("click", () => {
        const jsConcepts = new Set(['closure', 'scope', 'hoisting', 'async']);
        // 🪲 Bug: What's mssing from JS concepts? *** missing async***
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
        // 🪲 Bug: Incorrect function call *** 'jsConcepts' duplicated, changed one duplicate to 'reactConcepts'
        const commonConcepts = findIntersection(jsConcepts, reactConcepts);
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });

    // 🪲 Bug: Asynchronous function *** added 'async'
    document.getElementById("solveRoom3").addEventListener("click", async () => {
    try {
        const response = await fetch('directions.json');
        const directions = await response.json();
        const message = await navigateLabyrinth(directions);
        // 🪲 Bug: Incorrect method *** changed from '.innerHTML' to '.textContent'
        document.getElementById("room3Result").textContent = message; 
    } catch (error) {
        console.error("Error fetching directions:", error);
    }
});
});

function findMostRecentBook(books) {
    // 🪲 Bug: Logic error *** logic inverted '<' changed to '>'
    return books.reduce((mostRecent, book) => new Date(book.published) > new Date(mostRecent.published) ? book : mostRecent);
}

function findIntersection(setA, setB) {
    // 🪲 Bug: Incorrect logic *** missing 'setB' or comparison element***
    const intersection = new Set([...setA].filter(item => setB.has(item)));
    return intersection;
}

async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        // 🪲 Bug: No delay *** added 'await' for navigation delay***
       await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Navigating: ${direction.step}`);
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}

