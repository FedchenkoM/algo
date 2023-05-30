// https://leetcode.com/problems/capitalize-the-title

/**
 * @param {string} title
 * @return {string}
 */
const capitalizeTitle = function (title) {
    return title
        .split(' ')
        .map((word) => {
            let nw = '';
            if (word.length > 2) {
                for (let i = 0; i < word.length; i++) {
                    if (i == 0) nw += word[i].toUpperCase();
                    else nw += word[i].toLowerCase();
                }
            } else nw += word.toLowerCase();

            return nw;
        })
        .join(' ');
};

// one line
/**
 * @param {string} title
 * @return {string}
 */
const capitalizeTitle2 = function (title) {
    return title
        .split(' ')
        .map((item) =>
            item.length <= 2
                ? item.toLowerCase()
                : `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`,
        )
        .join(' ');
};
