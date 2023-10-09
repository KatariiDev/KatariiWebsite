const introduction = document.querySelectorAll('.introduction')
const aboutMe = document.querySelectorAll('.aboutMe')
const skillPercent = document.querySelectorAll('.skillPercent')
const skillText = document.querySelectorAll('.container-box__process-text')
const learningWebsite = document.querySelectorAll('.learningWebsite')
const hiringWebsite = document.querySelectorAll('.hiringWebsite')
const profileWebsite = document.querySelectorAll('.profileWebsite')
const displayOfStatus = document.getElementById('status')
const demoBox = document.querySelector('.container-box.container-box--demo')

// var MySocialLinkApi = 'http://localhost:3000/SunaookamiShiroko'

// fetch(MySocialLinkApi)
//   .then(function(res) {
//     return res.json()
//   })
//   .then(function(linkApi) {
    
//   })

const myIntroductionSocial = {
  github: 'https://github.com/KatariiDev',
  discord: '#',
  spotify: '#',
  facebook: 'https://www.facebook.com/dinhgiaphu.developer/',
  instagram: 'https://www.instagram.com/katarii_1907/',
  gmail: 'mailto:katarii'
}

const myAboutMe = {
  textOne: 'Hello, I\'m Katarii - Newbie Developer. I\'ve only been learning coding for 3 months and this is my first product. I am skilled in some programming languages and technologies, always eager to learn and adapt to new advancements. So it still has a lot of error, so please feel free to comment.',
  textTwo: 'I use Instagram and Messenger every day to communicate and work so you can always interact with me through them. And I hope we can become good friends through this product.',
  // textThree: 'My life is full of challenges, but fortunately for me, I found her - she always comes to me when I\'m happy and tries to encourage me every day to overcome the difficulties of life. That\'s why I love her so much.'
}

const mySkillPercent = {
  HTML: 60,
  CSS: 40,
  JavaScript: 65,
  Python: 70
}

const myProfileWebsite = {
  title: 'Katarii Profile | Website',
  desc: 'Website công bố thông tin cá nhân và các dự án mới trong tương lai,...',
  status: 'finished'
}

const myLearningWebsite = {
  title: 'DevDocs',
  desc: 'Website tra cứu tài liệu lập trình, phát triển công nghệ trí tuệ nhân tạo và nhiều nhiều mới mẻ khác,...',
  status: 'pending'
}

const myHiringWebsite = {
  title: 'CatWs',
  desc: 'Website thuê thiết kế Website cho sinh viên, doanh nghiệp,...',
  status: 'pending'
}

demoBox.innerHTML = 
'<p>Bạn có thể điền vào miền này ~~</p>'

// Khu vực thuật toán (không chỉnh sửa)
const introductionValues = Object.values(myIntroductionSocial)
const skillPercentValues = Object.values(mySkillPercent)
const learningWebsiteValues = Object.values(myLearningWebsite)
const hiringWebsiteValues = Object.values(myHiringWebsite)
const profileWebsiteValues = Object.values(myProfileWebsite)

for (let i = 0; i < introductionValues.length; i++) {
  introduction[i].href = introductionValues[i]
  introduction[i].target = '_blank'
}

const aboutMeValues = Object.values(myAboutMe)
for (let i = 0; i < aboutMeValues.length; i++) {
  aboutMe[i].textContent = aboutMeValues[i]
}

for (let i = 0; i < skillPercentValues.length; i++) {
  skillPercent[i].style = `--process: ${skillPercentValues[i]}%`
  skillText[i].textContent = `${skillPercentValues[i]}%`
}

for (let i = 0; i < learningWebsiteValues.length - 1; i++) {
  learningWebsite[i].textContent = learningWebsiteValues[i]
}

for (let i = 0; i < hiringWebsiteValues.length - 1; i++) {
  hiringWebsite[i].textContent = hiringWebsiteValues[i]
}

for (let i = 0; i < profileWebsiteValues.length - 1; i++) {
  profileWebsite[i].textContent = profileWebsiteValues[i]
}

displayOfStatus.className = `status-display--${myLearningWebsite['status']}`
displayOfStatus.textContent = myLearningWebsite['status']

displayOfStatus.className = `status-display--${myHiringWebsite['status']}`
displayOfStatus.textContent = myHiringWebsite['status']

displayOfStatus.className = `status-display--${myProfileWebsite['status']}`
displayOfStatus.textContent = myProfileWebsite['status']