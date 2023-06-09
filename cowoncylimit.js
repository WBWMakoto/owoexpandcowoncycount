const levels = 75;

async function calculateLimits() {
  const levelLimits = [];

  for (let level = 0; level <= 75; level++) {
    const limits = await getUserLimits(level);
    levelLimits.push({ level, ...limits });
  }

  console.log(levelLimits);
}

async function getUserLimits(level) {
  const lvl = level;
  const tens = Math.floor(level / 10);
  const limit = 50000 + lvl * 14000 + tens * 5000000;

  return {
    send: limit,
    receive: Math.ceil(limit * (tens / 2 + 1)),
  };
}

calculateLimits();
