/*
Create an array called friends. It will hold five of your friends' names.

For every friend in the friend array, you will want to console.log the descending 
chorus of this brand-new, never before seen song 100 times. 
The lyric must include your friend's name, and must be grammatically correct 
when we get down to 1. See the example output for more information.

*/


let friends = ['Jason','Sharon','Eric','Jagrup','Chris'];

let i = 0

while (i < friends.length) {
    let lyric = 99;
    let x = lyric-1;
    console.log(friends[i]);
    while (lyric > 1) {
        console.log(lyric + ' lines of code in the file, ' + lyric + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + x + ' lines of code in the file');
        lyric--;
        x--;
    }
    console.log('1 line of code in the file, 1 line of code; ' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file');
    i += 1;    
}
    
