export default function hist() {
  const numCurves = Math.floor(Math.random() * 8) + 2;

  const resolution = Math.floor(75 / numCurves);
  let allCurves = Array(resolution * numCurves).fill(null);
  for (let i = 0; i < numCurves; i++) {
    const vals = curve_smart(resolution);
    for (let j = 0; j < vals.length; j++) {
      allCurves[i * resolution + j] = vals[j];
    }
  }
  return allCurves.map(
    (v) => (50 * (v - Math.min(...allCurves))) / Math.max(...allCurves)
  );
}

function curve_smart(resolution) {
  let sampleNeg = Array(Math.floor(resolution / 2))
    .fill()
    .map(() => -Math.abs(randn_bm()));

  let samplePos = Array(Math.floor(resolution / 2))
    .fill()
    .map(() => Math.abs(randn_bm()));

  sampleNeg = sampleNeg.sort(function (a, b) {
    return b - a;
  });
  samplePos = samplePos.sort(function (a, b) {
    return b - a;
  });
  return sampleNeg.map((i) => i * -1).concat(samplePos);
}

function randn_bm() {
  let u = 1 - Math.random(); //Converting [0,1) to (0,1)
  let v = Math.random();
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}
