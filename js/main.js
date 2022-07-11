// LI va a href elementlarining barchasini DOM dan JS file ga chaqirib olamiz

var elItem = document.querySelectorAll(".tab__item");
var elLink = document.querySelectorAll(".tab__link");
var elFeaturesItem = document.querySelectorAll(".features-info-box__item");



// LINK larni barchasiga birdak tasir qilish uchun silk (forEach)
// orqali aylanib chiqish kerak

elLink.forEach(function(links){

// linklarni hammasini eshitib turuvchi hodisa qo'shish
  // linkga bosilgan payti qandaydir hodisani amalga oshirish

  links.addEventListener("click" , function(evt){

    // linkning sakrab ketishini ya'ni sahifani refresh bo'lishini oldini oladi
    evt.preventDefault();

    // ITEM larni barchasiga birdak tasir qilish uchun silk (forEach)
    // orqali aylanib chiqish kerak

    elItem.forEach(function(item){

      // item elementidagi classlar ro'yxatidan shu classni o'chirish yuborish
      item.classList.remove("tab__item--active");
    })

    // link elementining ota elementifa classlar ro'yxatidan shu classni qo'shib yuborish
    links.parentElement.classList.add("tab__item--active");

    elFeaturesItem.forEach(function(featuresItem){
      featuresItem.classList.remove("features-info-box__item--active");
    })

    document.querySelector(links.getAttribute("href")).classList.add("features-info-box__item--active");

  })



})


