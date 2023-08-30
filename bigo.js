function logItems(n) {
    // O(n * n)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j)
        }
    }

    // O(n)
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
}

logItems(10) // O(n * n + n) = 0(n2)
