/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {

    let resArr = [];
    let hIndex = 0;
    let corrIndex = 0;
    
    citations.sort((a, b) => a - b);
    citations.reverse();

    for (let i = 0; i < citations.length; i++) {
        resArr = citations.filter((el) => el >= citations[i]);
        corrIndex = i + 1;

        if (citations[i] >= corrIndex) {
            hIndex = corrIndex;
        } else if (citations[i] < corrIndex) {
            break;
        }
    }

    return hIndex;
};