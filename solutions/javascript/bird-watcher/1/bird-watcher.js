export function totalBirdCount(birdsPerDay) {
  let total = 0;
  for (let i = 0; i < birdsPerDay.length; i++){
    total += birdsPerDay[i];
  }
  return total;
}

export function birdsInWeek(birdsPerDay, week) {
  let startIndex = (week - 1) * 7;
  let weeklyTotal = 0;
  for (let i = startIndex; i < startIndex + 7; i++){
    weeklyTotal += birdsPerDay[i];
  }
  return weeklyTotal
}

export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] += 1;
  }
  return birdsPerDay;
}
