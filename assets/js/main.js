/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== */
function writeTitle() {
    const title = document.querySelector('.digitando');
    const texts = ["Desenvolvedor Web", "UI/UX Designer"];
    let currentTextIndex = 0;
    let isDeleting = false;
    let currentText = '';
    
    function typeText() {
        currentText = texts[currentTextIndex];
        if (isDeleting) {
            title.textContent = currentText.slice(0, title.textContent.length - 1);
        } else {
            title.textContent = currentText.slice(0, title.textContent.length + 1);
        }
        
        if (!isDeleting && title.textContent === currentText) {
            isDeleting = true;
            setTimeout(typeText, 1000);
        } else if (isDeleting && title.textContent === '') {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            setTimeout(typeText, 200);
        } else {
            setTimeout(typeText, isDeleting ? 50 : 150);
        }
    }
    
    typeText();
}

writeTitle();



function aboutMe(){
    const divExperience = document.querySelectorAll('.experience_content div'); 
    const liExperience = document.querySelectorAll('.experience_content ul li'); 
    const divEducation = document.querySelectorAll('.education_content div'); 
    const liEducation = document.querySelectorAll('.education_content ul li'); 

    divEducation[0].classList.add('active');
    liEducation[0].classList.add('active');
    divExperience[0].classList.add('active');
    liExperience[0].classList.add('active');
    
    function slideShow(index){
        divExperience.forEach((div)=>{
            div.classList.remove('active')
        });
        liExperience.forEach((buttom)=>{
            buttom.classList.remove('active');
        })
        divExperience[index].classList.add('active');
        liExperience[index].classList.add('active');
    }
    
    function slideShow2(index){
        divEducation.forEach((div)=>{
            div.classList.remove('active')
        });
        liEducation.forEach((buttom)=>{
            buttom.classList.remove('active');
        })
        divEducation[index].classList.add('active');
        liEducation[index].classList.add('active');
    }
    
    liExperience.forEach((event, index) => {
        event.addEventListener('click', () =>{
            slideShow(index);
        })
    });
    
    liEducation.forEach((event, index) => {
        event.addEventListener('click', () =>{
            slideShow2(index);
        })
    });
}

aboutMe();

const listAll = document.querySelectorAll('.projects_storage ul li');
const buttomGeral = document.querySelectorAll('.projects_models ul li');
const buttomAll = document.querySelectorAll('.projects_models .all');


function removeClick(index){
    buttomGeral.forEach((item)=>{
        item.classList.remove('.active');
    });
    buttomGeral[index].classList.add('.active')
}

buttomGeral.forEach((item, index)=>{
    item.addEventListener('click',()=>{
        removeClick(index);
    })
    
})

function showList(list, buttom = "all"){
    list.forEach((item) =>{
        item.classList.remove('active')
    });
    if(buttom == 'design'){
        list[0].classList.add('active');
        list[1].classList.add('active');
    }
    if(buttom == 'graphic'){
        list[2].classList.add('active');
        list[3].classList.add('active');
    }
    if(buttom == 'webSite'){
        list[4].classList.add('active');
        list[5].classList.add('active');
        list[6].classList.add('active');
        list[7].classList.add('active');
    }
    if(buttom == 'all'){
        list[0].classList.add('active');
        list[1].classList.add('active');
        list[2].classList.add('active');
        list[3].classList.add('active');
        list[4].classList.add('active');
        list[5].classList.add('active');
        list[6].classList.add('active');
        list[7].classList.add('active');
    }
}

buttomGeral.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        let currentButtom = e.target
        if(currentButtom.classList.contains('all')){
            showList(listAll)
        }
        if(currentButtom.classList.contains('design')){
            showList(listAll, "design")
        }
        if(currentButtom.classList.contains('graphic')){
            showList(listAll, "graphic")
        }
        if(currentButtom.classList.contains('webSite')){
            showList(listAll, "webSite")
        }
        if(currentButtom.classList.contains('all')){
            showList(listAll, "all")
        }
    })
})