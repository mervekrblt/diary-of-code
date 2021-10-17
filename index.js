//User
//Diary
//Day

class User {
  constructor(name, about, age, location) {
    this.name = name
    this.about = about
    this.age = age
    this.location = location
    this.diaries = []
    this.likedDiaries = []
    this.followers = []
    this.following = []
  }

  createDiary(title) {
    const diary = new Diary(title, this.name)
    this.diaries.push(diary)
    return diary
  }

  addDay(title, body, diary) {
    const day = new Day(title, body, diary.title)
    diary.day.unshift(day)
    return day
  }

  follow(user) {
    this.following.unshift(user.name)
    user.followers.unshift(this.name)
  }

  likeDiary(diary) {
    this.likedDiaries.unshift(diary)
  }
}

class Diary {
  constructor(title, author) {
    this.title = title
    this.author = author
    this.day = []
    this.likes = []
  }
}

class Day {
  constructor(title, body, diary) {
    this.title = title
    this.body = body
    this.diary = diary
  }
}

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