function factorialize(a) {
  if (a < 0) return -1;
  if (a === 0) return 1;

  return a * factorialize(a - 1);
}

module.exports = factorialize;

// pair:Francis Xavier & Jonah Okot
