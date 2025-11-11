const cashRegister = (total, cashGiven) => {
    if (total > cashGiven) return 'Not enough money!';

    const cashMap = {
        'hundred': 100,
        'fifty': 50,
        'twenty': 20,
        'ten': 10,
        'five': 5,
        'one': 1,
        'quarter': 0.25,
        'dime': 0.1,
        'nickel': 0.05,
        'penny': 0.01,
    }

    const result = {};
    let change = Math.round((cashGiven - total) * 100) / 100;

    for (const i in cashMap) {
        if (change === 0) break;
            // i is the word form, cashMap[i] is the number itself
            while (change >= cashMap[i]) {
                result[i] ? result[i]++ : result[i] = 1;
                change = Math.round((change - cashMap[i]) * 100) / 100;
            }
    }

    return result;
}

// handle large amounts
cashRegister(100.00, 300.00); // return {hundred: 2}
// handle small amounts
cashRegister(4.00, 5.00); // return {one: 1}
// handle small change
cashRegister(4.62, 5.00); // return {quarter: 1, dime: 1, penny: 3}
// handle quarters
cashRegister(4.50, 5.00); // return {quarter: 2}
// handle dimes
cashRegister(4.80, 5.00); // return {dime: 2}
// handle nickels
cashRegister(4.95, 5.00); // return {nickel: 1}
// handle penny
cashRegister(4.99, 5.00); // return {penny: 1}
// handle not enough
cashRegister(400.00, 300.00); // return 'Not enough money!'
