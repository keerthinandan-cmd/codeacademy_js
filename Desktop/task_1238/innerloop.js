// Write your code below
let bobsFollowers = ['rgth', 'htyh', 'Smasd', 'thyg'];
let tinasFollowers = ['rgth', 'htyh', 'thyf'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};

