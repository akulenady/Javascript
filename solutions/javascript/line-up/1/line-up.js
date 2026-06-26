export function format(name, number) {
  let suffix;

  if (number % 100 >= 10 && number % 100 <= 20) {
    suffix = "th";
  } else {
    switch (number % 10) {
      case 1:
        suffix = "st";
        break;
      case 2:
        suffix = "nd";
        break;
      case 3:
        suffix = "rd";
        break;
      default:
        suffix = "th";
    }
  }

  return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`;
}