const colors = {
  gunmetal: "#243E36",
  isabelline: "#F1F7ED",
  green: "#5A9643",
};

const constants = {
  gridSize: 25,
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
};

export { colors, constants, utils };
