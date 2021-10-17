//User
//Diary
//Day

const User = require('./user')

const merve = new User('Merve', 'I want to be a full stack dev', 27, 'Ankara')
const melis = new User('Melis', 'I want to be frontend dev', 19, 'Ankara')

const firstDiary = merve.createDiary('100DaysOfCode')
const secondDiary = merve.createDiary('JavaScript')

const melisDiary = melis.createDiary('Html')

merve.follow(melis)
merve.likeDiary(melisDiary)


const day1 = merve.addDay('Day1', 'I do nothing', firstDiary)
const day2 = merve.addDay('Day2', 'I write some code', firstDiary)
const day01 = merve.addDay('Day1', 'This is JS', secondDiary)
console.log(merve.diaries[0])