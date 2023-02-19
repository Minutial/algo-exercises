// https://www.hackerrank.com/challenges/ctci-ransom-note/problem


function checkMagazine(magazine, note) {
  for (let i = 0; i <= note.length; i++) { 
        for (let j = 0; j <= magazine.length; j++) {
            if (note[i] == magazine[j]) {
                magazine.splice(magazine.indexOf(magazine[j]), 1);
                note.splice(note.indexOf(note[i]), 1);
            }
        }
    }
    if (note.length > 0) {
        return console.log("No");
    }
    return console.log("Yes");;
}

function checkMagazine(magazine, note) {
    let result = "Yes"
    note.forEach((n) => {
        if (magazine.includes(n)) {
            magazine.splice(magazine.indexOf(n), 1)
        }
        else {
            result = "No"
            return
        }

    })
    console.log(result)
}

function checkMagazine(magazine, note) {
  let final = {};
  let result = "Yes";

  magazine.forEach((m)=>{
      final[m] = final[m] ? final[m] + 1 : 1;
  })

 note.forEach((n) => {
     if (final[n] > 0) {
         final[n] =  final[n] - 1;
     }
     else {
         result = "No";
         return;
     }
 })
 console.log(result);
}