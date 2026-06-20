let team1 = document.querySelector('.team1')
let team2 = document.querySelector('.team2')
let team3 = document.querySelector('.team3')
let height = Math.max(parseInt(getComputedStyle(team1).getPropertyValue('height')), parseInt(getComputedStyle(team2).getPropertyValue('height')), parseInt(getComputedStyle(team3).getPropertyValue('height')))
team1.style.height = `${height}px`
team2.style.height = `${height}px`
team3.style.height = `${height}px`

function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}

let button = document.querySelector('.arrow-next')
button.addEventListener('click', scrollDown)


let item_name_objects = document.querySelectorAll('.merch-item-name')
let item_names = ['Тарелка', 'Кружка', 'Ракета', 'Марсоход']
for (let i = 0; i <  4;i +=1) {
    item_name_objects[i].innerHTML = item_names[i]
}
let item_name_story = document.querySelectorAll('.merch-item-descr')
let item_story =['Тарелка с принтом Марса. Доступна в красном и белом цветах','Кружка с принтом Марса. Доступа в красном и белом цветах','Масштабная модель одной из ракет Galaxy','Масштабная модель масохода (мы покупаем их у NASA)']
for (let i=0;i<4;i +=1){
    item_name_story[i].innerHTML=item_story[i]
}
let item_name_pay = document.querySelectorAll('.merch-item-price')
let item_price =['1000','1000','2500','5000']
for (let i=0;i<4;i +=1){
    item_name_pay[i].innerHTML=item_price[i]
}
