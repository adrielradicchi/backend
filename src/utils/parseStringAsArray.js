module.exports = function parseStrubgAsArray(arrayAsString) {
    return arrayAsString.split(',').map(tech => tech.trim());
}