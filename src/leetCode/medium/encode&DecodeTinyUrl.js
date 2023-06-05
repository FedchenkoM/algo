const hashMap = new Map();

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const encode = function (longUrl) {
    let hashedUrl = Math.random().toString(32);

    while (hashMap.has(hashedUrl)) {
        hashedUrl = Math.random().toString(32);
    }

    hashMap.set(hashedUrl, longUrl);

    return hashedUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
const decode = function (shortUrl) {
    return hashMap.get(shortUrl);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
