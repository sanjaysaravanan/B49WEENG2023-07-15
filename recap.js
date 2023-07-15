const obj = {
  "name": "Sanjay",
  "role": "Software Engineer",
  "isIndian": true,
  "age": 25,
  "gender": "Male",
  "height": 25,
  "hobbies": [
    {
      "name": "singing",
      "level": "intermediate"
    },
    {
      "name": "singing",
      "level": "intermediate"
    },
    {
      "name": "singing",
      "level": "intermediate"
    }
  ],
  "skills": [
    "Python",
    "Java",
    "JavaScript"
  ]
};


const array = [
  { "name": "Python" },
  { "name": "Java" },
  { "name": "JavaScript" }
]

for (const object of array) {

}

for (var key of obj) {
  console.log(key, obj[key]);
}


const sampleJson = {
  "name": "John Doe",
  "age": 30,
  "city": "New York",
  "isStudent": false,
  "hobbies": ["reading", "traveling", "playing guitar"],
};

//for loop
const keys = Object.keys(sampleJson);
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  console.log(key + ": " + sampleJson[key]);
}


//for in
for (let key in sampleJson) {
  console.log(key + ": " + sampleJson[key]);
}

//for of
const keys1 = Object.keys(sampleJson);
for (let key of keys1) {
  console.log(key + ": " + sampleJson[key]);
}

// Object.keys & Object.values
const objTwo = { ...sampleJson }

for (let key in objTwo) {
  console.log(key + ": " + objTwo[key]);
}

for (let key of Object.keys(objTwo)) {
  console.log(key + ": " + objTwo[key]);
}