//ticket pricing

const age = prompt("What is your age?");

if (age <= 12) {
  console.log(`The ticket price is $10`);
} else if (age <= 17) {
  console.log(`The ticket price is $15`);
} else if (age >= 18) {
  console.log(`The ticket price is $20`);
}

const isRaining = prompt(`Is it raining?(yes or no)`);
const temp = prompt(`What's the current temperature outside?`);

const carry_umbrella = () => {
if (isRaining == "yes") {
    return 'carry an umbrella';
} else if (isRaining == "no") {
    return 'not carry an umbrella';
} else {
    console.log('Invalid input');
    return '';
}
}

const wear_jacket = () => {
    const temperature = Number(temp);
    if(isNaN(temperature)){
        console.log('Invalid temperature input');
        return '';
    }
if(temperature < 10){
    return 'wear a heavy jacket,gloves and marvin'
}else if(temperature >= 10 && temperature <= 20){
    return 'wear a heavy jacket'
}else if(temperature > 20 && temperature <= 30){
    return 'wear a light jacket'
}else if(temperature > 30){
    return 'not wear a jacket'
}else{
    console.log('Invalid input')
}
}

const clothes_advise = () => {console.log(`You should ${carry_umbrella()} and ${wear_jacket()}`);}

clothes_advise();