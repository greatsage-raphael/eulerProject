function longestCollatzSequence(limit) {
    let longest = {num: 0, count: 0};
    for (let i = 1; i < limit; i++) {
        let count = 1, n = i;
        while (n !== 1) {
            if (n % 2 === 0) {
                n /= 2;
            } else {
                n = 3 * n + 1;
            }
            count++;
        }
        if (count > longest.count) {
            longest = {num: i, count: count};
        }
    }
    return longest.num;
}

console.log(longestCollatzSequence(1000000));
