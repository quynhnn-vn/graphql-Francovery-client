// Compare 2 strings after being formated and normalized
export const compareText = (str1, str2) => {
  str1 = str1
    .toLowerCase()
    .split(" ")
    .join("-")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  str2 = str2
    .toLowerCase()
    .split(" ")
    .join("-")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  if (str1 === str2) return true;
  return false;
};

// Config the earth projection to render MapChart according to current screen width
export const configProjection = (screenWidth) => {
  if (screenWidth > 768) {
    return {
      rotate: [-2, -45.7, 0],
      scale: screenWidth * 2.5,
    };
  } else if (screenWidth > 600 && screenWidth <= 768) {
    return {
      rotate: [-2, -45.7, 0],
      scale: screenWidth * 4,
    };
  } else {
    return {
      rotate: [-2, -45.7, 0],
      scale: screenWidth * 5.5,
    };
  }
};

// Get the date of (today + index days)
// (eg: tomorrow = today + 1day, after-tomorrow = today + 2days)
export const getDate = (index) => {
    let today = new Date();
    today.setDate(today.getDate() + index);
    return today.toJSON().slice(0, 10);
};

// Get the day of week for a date
export const getDayOfWeek = (date) => {
    const newDay = new Date(date);
    const day = newDay.getDay();
    switch (day) {
      case 1:
        return "lun.";
      case 2:
        return "mar.";
      case 3:
        return "mer.";
      case 4:
        return "jeu.";
      case 5:
        return "ven.";
      case 6:
        return "sam.";
      default:
        return "dim.";
    }
  };
