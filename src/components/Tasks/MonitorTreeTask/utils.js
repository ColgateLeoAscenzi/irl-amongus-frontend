/**
 * A function which takes a target value and returns true if the selected value is within the threshold amount above
 * or below the target value, and false otherwise
 * @param {number} targetValue
 * @param {number} selectedValue
 * @param {number} threshHold
 * @returns {boolean}
 */
export const checkClose = (targetValue, selectedValue, threshhold) => {
    return (
        (selectedValue >= targetValue &&
            selectedValue <= targetValue + threshhold) ||
        (selectedValue <= targetValue &&
            selectedValue >= targetValue - threshhold)
    );
};
