    /*
    IN: String1, String2,
    OUT: Array of indices of which anagrams of P's are in S's
    occur
    if s in p in push array
    return empty array if p.length > s.length
    if s.includes(p) newArray.push(index 0)
    if (p.length > s.length) return [];
    if ("abc") {}
    */
    const findAnagrams = function(s, p) {
        const arr = [];
    const obj = {};

    for (let i of p) {
        if (obj[i]){
            obj[i] += 1
        } else {
            obj[i] = 1
        }
    }

    let left_index = 0;
    let right_index = 0;
    let count = p.length;

    while (right_index < s.length) {
        if (obj[s[right_index]] > 0) count--;

        obj[s[right_index]]--;
        right_index++;

        if (count === 0) arr.push(left_index);

        if (right_index - left_index === p.length) {

            if (obj[s[left_index]] >= 0) count++;

            obj[s[left_index]]++;
            left_index++;
        }
    }
    return arr;
    };
