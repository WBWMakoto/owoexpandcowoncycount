function getXpRequired(lvl) {
  return 5000 + Math.pow(lvl * 5, 2);
}

// Calculate EXP required for levels 1 to 75
const levels1To75 = [];
let totalExp = 0;

for (let level = 1; level <= 75; level++) {
  const expRequired = getXpRequired(level);
  levels1To75.push({ level, expRequired });
  totalExp += expRequired;
}

console.log("EXP required for levels 1 to 75:", levels1To75);
console.log("Total EXP required for levels 1 to 75:", totalExp);
