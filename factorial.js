function factorialize(a) {
  if (a < 2) return 1;
  for (let i = a - 1; i >= 2; i--) {
    a *= i;
  }
  return a;
}

module.exports = factorialize;

// pair:Francis Xavier & Jonah Okot
