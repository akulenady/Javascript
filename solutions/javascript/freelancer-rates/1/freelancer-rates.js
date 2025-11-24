export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget/dayRate(ratePerHour));
}
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const fullMonth = Math.floor(numDays/22);
  const remainingDays = numDays % 22;
  const monthlyCost = (22*fullMonth)*dayRate(ratePerHour)*(1-discount);
  const remainingDayCost = remainingDays*dayRate(ratePerHour);
  return Math.ceil(monthlyCost+remainingDayCost);
  
  }
