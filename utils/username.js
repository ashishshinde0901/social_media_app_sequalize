const adjectives = ["aback", "abaft", "abandoned", "abashed", "aberrant", "abhorrent", "abiding", "abject", "ablaze", "able", "abnormal", "aboard", "aboriginal", "abortive", "abounding", "abrasive"];

const nouns = ["accelerator", "accordion", "account", "accountant", "acknowledgment", "acoustic", "acrylic", "act", "action", "active", "activity", "actor", "actress", "adapter", "addition", "address"];

const cities = ["Abbott", "Abernathy", "Abilene", "Abram-Perezville", "Ackerly", "Addison", "Adrian", "Agua Dulce", "Agua Dulce", "Airport Road Addition", "Alamo", "Alamo Heights", "Alba", "Albany", "pune", "mumbai"];

function getRandUsername() {
    const adj = adjectives[Math.floor(Math.random()*17)]
    const non = nouns[Math.floor(Math.random()*17)]
    const cit = cities[Math.floor(Math.random()*17)]
    return `${adj}-${non}-${cit}`
}

// console.log(getRandUsername())
// console.log(getRandUsername())
// console.log(getRandUsername())
// console.log(getRandUsername())

module.exports = {
    getRandUsername
}
