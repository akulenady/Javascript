export function needsLicense(kind) {
  return kind == 'car' || kind == 'truck';
}

export function chooseVehicle(option1, option2) {
  let selection;
  if (option1 < option2) {
    selection = option1;
  } else {
    selection = option2;
  }
  return selection + " is clearly the better choice.";
}

export function calculateResellPrice(originalPrice, age) {
  let newPrice;
  if (age < 3) {
    newPrice = originalPrice - (0.2 * originalPrice);
  } else if (age >= 3 && age <= 10) {
    newPrice = originalPrice - (0.3 * originalPrice);    
  } else {
    newPrice = originalPrice - (0.5 * originalPrice);
  }
  return newPrice;
}
