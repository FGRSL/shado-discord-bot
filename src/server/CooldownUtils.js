const cooldown = new Map();

/**
 * @param {String} Snowflake A key to save 
 * @param {String} type A type to the key
 * @param {Number} timeInSeconds 
 */
function addCooldown(Snowflake, type, timeInSeconds) {
    let coolTypes = cooldown.get(Snowflake);
    if (coolTypes == null) {
        coolTypes = new Map();
    }
    coolTypes.set(type, new Date().getTime() + (timeInSeconds * 1000));
    cooldown.set(Snowflake, coolTypes);
}
/**
 * @param {String} Snowflake A key to save 
 * @param {String} type A type to the key
 */
function removeCooldown(Snowflake, type) {
    let coolTypes = cooldown.get(Snowflake);
    if (coolTypes == null) {
        coolTypes = new Map();
    }
    coolTypes.delete(type);
    if (coolTypes.size <= 0) {
        cooldown.delete(Snowflake);
    } else {
        cooldown.set(Snowflake, coolTypes);
    }
}

/**
 * 
 * @param {String} Snowflake A key to get
 * @param {String} type A type to the key
 * @returns {Number | String} Without formatted is Number | With format is String
 */
function getCooldown(Snowflake, type) {
    if (cooldown.has(Snowflake)) {
        let coolTypes = cooldown.get(Snowflake);
        if (coolTypes != null && coolTypes.has(type)) {
            return (coolTypes.get(type) - new Date().getTime()) / 1000;
        }
    }
    return -1;
}

/**
 * 
 * @param {String} Snowflake A key to get
 * @param {String} type A type to the key
 * @returns {Boolean}
 */
function hasCooldown(Snowflake, type) {
    return getCooldown(Snowflake, type) > 0;
}

function removeExpireds() {
    for (let [key, value] of cooldown) {
        for (let [key2, value2] of value) {
            if (value2 < new Date().getTime()) {
                value.delete(key2);
            }
        }
        if (value.size <= 0) {
            cooldown.delete(key);
        }
    }
}

module.exports = { removeExpireds, addCooldown, getCooldown, hasCooldown, removeCooldown };