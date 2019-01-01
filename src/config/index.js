const colors = {
  gunmetal: "#243E36",
  isabelline: "#F1F7ED",
  green: "#5A9643",
};

const constants = {
  gridSize: 25,
  second: 1000,
  minute: 60 * 1000,
  screens: {
    menu: 0,
    gameplay: 1,
    results: 2,
  },
  mediaQueries: {
    medium: 767,
  },
};

const utils = {
  /**
   * Shuffles array in place. ES6 version
   * @param {Array} array items An array containing the items.
   */
  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  },

  getDigit(value) {
    return value < 10 ? `0${value}` : `${value}`;
  },

  formatTime(ms) {
    const minutes = Math.floor(ms / constants.minute);
    const seconds = ms % constants.minute / constants.second;

    return `${utils.getDigit(minutes)} : ${utils.getDigit(seconds)}`;
  },
};

export { colors, constants, utils };
