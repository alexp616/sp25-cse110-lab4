for (const p in statistics) {
    if (`${p}`[1] === 'r' || statistics[p] % 2 == 1) {
        console.log(statistics[p])
    }
}