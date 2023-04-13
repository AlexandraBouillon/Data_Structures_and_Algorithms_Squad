const characterReplacement = function(s, k) {
    let left = 0;
    let right = 0;
    let maxCharCount = 0;
    const visited = {};

    while (right < s.length) {
      const char = s[right];
    if (visited[char] ) {
        visited[char] += 1
    } else {
        visited[char] = 1
    }

      if (visited[char] > maxCharCount) maxCharCount = visited[char];

      if (right - left + 1 - maxCharCount > k) {
        visited[s[left]]--;
        left++;
      }

      right++;
    }

    return right - left;
};
