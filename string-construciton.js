// Amanda has a string of lowercase letters that she wants to copy to a new string. She can perform the following operations with the given costs. She can perform them any number of times to construct a new string :

// Append a character to the end of string  at a cost of  dollar.
// Choose any substring of  and append it to the end of  at no charge.
// Given  strings , find and print the minimum cost of copying each  to  on a new line.

// For example, given a string , it can be copied for  dollars. Start by copying ,  and  individually at a cost of  dollar per character. String  at this time. Copy  to the end of  at no cost to complete the copy.

// Function Description

// Complete the stringConstruction function in the editor below. It should return the minimum cost of copying a string.

// stringConstruction has the following parameter(s):

// s: a string
// Input Format

// The first line contains a single integer , the number of strings.
// Each of the next  lines contains a single string, .

// Constraints

// Subtasks

//  for  of the maximum score.
// Output Format

// For each string  print the minimum cost of constructing a new string  on a new line.

// Sample Input

// 2
// abcd
// abab
// Sample Output

// 4
// 2


// ### My Notes

// This challenges seems more difficult at first. When reading the descritption I though i would
// have to keep track of substrings to see what i could repeat and create a cost function.
// The solution is much simpler. All you have to do is keep track of every seen single character
// as that counts as a substring. The first time you see the character costs 1 then it is free after
// So each letter has 1 cost. You can just add all letters to a Set and the length of the Set is answer

function stringConstruction(s) {
    let seen = new Set();
    
    for(let i = 0; i < s.length; i++) {
            seen.add(s[i]);
    }
    
    return seen.size

}