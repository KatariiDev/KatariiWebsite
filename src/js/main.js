const introduction = document.querySelectorAll('.introduction')
const aboutMe = document.querySelectorAll('.aboutMe')
const planWebsite = document.querySelectorAll('.planWebsite')
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
  texThree: 'Viet Nam',
  textFour: 'Copyright ® Katarii',
  textFive: 'Dating'
}

const myPlanWebsite = {
  katarii: '#',
  devdocs: 'http://dev-docs-katariidev.vercel.app',
  catws: 'Bạn Không Có Quyền Xem Trước !!!!!'
  // http://dev-docs-katariidev.vercel.app/
}

// Biến tiến độ
var htmlpc = 60
var csspc = 40
var javascriptpc = 65
var pythonpc = 70
var reactjspc = 15
var nodejspc = 5
var phppc = 2
var total = Number.parseInt((htmlpc+csspc+javascriptpc+pythonpc+reactjspc+nodejspc+phppc)/7)

const mySkillPercent = {
  Total: total,
  HTML: htmlpc,
  CSS: csspc,
  JavaScript: javascriptpc,
  Python: pythonpc,
  ReactJs: reactjspc,
  NodeJs: nodejspc,
  PHP: phppc,
}

const myProfileWebsite = {
  title: 'Project: Katarii | Website',
  date: 'Date: 11/08/2023',
  desc: 'Website công bố thông tin cá nhân và các dự án mới trong tương lai,...',
  status: 'finished'
}

const myLearningWebsite = {
  title: 'Project: DevDocs',
  date: 'Date: 20/07/2023',
  desc: 'Website tra cứu tài liệu lập trình, phát triển công nghệ trí tuệ nhân tạo và nhiều nhiều mới mẻ khác,...',
  status: 'pending'
}

const myHiringWebsite = {
  title: 'Project: CatWs',
  date: 'Date: 02/08/2023',
  desc: 'Website thuê thiết kế Website cho sinh viên, doanh nghiệp,...',
  status: 'pending'
}

demoBox.innerHTML = 
'<p>Bạn có thể điền vào miền này ~~</p>'

// Khu vực thuật toán (không chỉnh sửa)
const introductionValues = Object.values(myIntroductionSocial)
const planWebsiteValues = Object.values(myPlanWebsite)
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

for (let i = 0; i < planWebsiteValues.length; i++) {
  planWebsite[i].href = planWebsiteValues[i]
  planWebsite[i].target = '_blank'
}

// const planWebsiteValues = Object.values(myPlanWebsite)
// for (let i = 0; i < planWebsiteValues.length; i++) {
//   planWebsite[i].textContent = planWebsiteValues[i]
// }

displayOfStatus.className = `status-display--${myLearningWebsite['status']}`
displayOfStatus.textContent = myLearningWebsite['status']

displayOfStatus.className = `status-display--${myHiringWebsite['status']}`
displayOfStatus.textContent = myHiringWebsite['status']

displayOfStatus.className = `status-display--${myProfileWebsite['status']}`
displayOfStatus.textContent = myProfileWebsite['status']