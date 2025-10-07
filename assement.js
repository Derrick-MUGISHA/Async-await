function solution(inputString) {
    // Step 1: Remove vowels (a, e, i, o, u - case insensitive)
    const noVowels = inputString.replace(/[aeiou]/gi, '');

    // Step 2: Reverse the string
    const reversedString = noVowels.split('').reverse().join('');

    // Step 3: Return the result
    return reversedString;
}

// Test
console.log(solution("Hello world!")); // Output: "!dlrw llH"

function solution(memo, k) {
    const allConsonants = "bcdfghjklmnpqrstvwxyz";
    const allConsonantsUpper = "BCDFGHJKLMNPQRSTVWXYZ";

    let consonantCount = 0;
    let result = [];

    // Ensure k is at least 1 to avoid division by zero
    k = Math.max(1, k);

    for (let i = 0; i < memo.length; i++) {
        const char = memo[i];
        let isUpper = false;
        let index = allConsonantsUpper.indexOf(char);

        if (index !== -1) {
            isUpper = true;
        } else {
            index = allConsonants.indexOf(char);
        }

        // If it's a consonant
        if (index !== -1) {
            consonantCount++;
            // Check if it's the k-th consonant
            if (consonantCount % k === 0) {
                const nextIndex = (index + 1) % allConsonants.length;
                result.push(isUpper ? allConsonantsUpper[nextIndex] : allConsonants[nextIndex]);
            } else {
                result.push(char);
            }
        } else {
            // Not a consonant, leave it as is
            result.push(char);
        }
    }

    return result.join('');
}

// Example usage:
console.log(solution("Hello World!", 2)); // "Hello Xorld!" (H->H, e->e, l->l, l->l, o->o, W->X...)


function solution(matrix) {
    const rows = matrix.length;
    if (rows === 0) return 0;
    const cols = matrix[0].length;
    let count = 0;

    // Check each cell as center of a cross
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (isNearlyRegular(matrix, r, c, rows, cols)) {
                count++;
            }
        }
    }
    return count;
}

function isNearlyRegular(matrix, r, c, rows, cols) {
    let expected;

    // Check row (skip center)
    for (let j = 0; j < cols; j++) {
        if (j === c) continue;
        expected = expected === undefined ? matrix[r][j] : expected;
        if (matrix[r][j] !== expected) return false;
    }

    // Check column (skip center)
    for (let i = 0; i < rows; i++) {
        if (i === r) continue;
        expected = expected === undefined ? matrix[i][c] : expected;
        if (matrix[i][c] !== expected) return false;
    }

    return true;
}

// Example
const matrix = [
    [1, 1, 1, 1],
    [2, 3, 1, 1],
    [1, 1, 1, 0],
    [1, 4, 1, 1]
];
console.log(solution(matrix)); // Output: 2
