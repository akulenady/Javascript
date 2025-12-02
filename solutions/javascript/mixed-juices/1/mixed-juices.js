export function timeToMixJuice(name) {
  switch(name){
    case "Pure Strawberry Joy":
        return 0.5;
        break;
    case 'All or Nothing':
        return 5;
        break;
    case 'Energizer':
        return 1.5;
        break;
    case 'Green Garden':
        return 1.5;
        break;
    case 'Tropical Island':
        return 3;
        break;
    default:
        return 2.5;
        break;
  }
}

export function limesToCut(wedgesNeeded, limes) {
  let totalWedges = 0;
  let limesCut = 0;
  while(limesCut<limes.length && totalWedges<wedgesNeeded){
    const currentLime = limes[limesCut];
    switch(currentLime){
      case 'small':
        totalWedges+=6;
        break;
      case 'medium':
        totalWedges += 8;
        break;
      case 'large':
        totalWedges += 10;
        break;
    }
    limesCut++;
  }
  return limesCut;
}

export function remainingOrders(timeLeft, orders) {
  while(timeLeft>0 && orders.length>0){
    const currentOrder = orders.shift();
    timeLeft -= timeToMixJuice(currentOrder);
  }
  return orders;
}
