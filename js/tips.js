function calculateTip(a, r) {
    const i = {
        terrible: 0,
        poor: 0.05,
        good: 0.1,
        great: 0.15,
        excellent: 0.2
    }

    const v = i[r.toLowerCase()];

    return v === undefined ? 'Rating not recognised' : Math.ceil(a * v);
}

console.assert(calculateTip(20, "Excellent") === 4, 'neteisingai!!!');
console.assert(calculateTip(26.95, "good") === 3, 'neteisingai!!!');