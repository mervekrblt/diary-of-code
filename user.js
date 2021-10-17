const Diary = require('./diary')
const Day = require('./day')

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

module.exports = User