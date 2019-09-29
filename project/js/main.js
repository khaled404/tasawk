
$(function(){
    // var mainTime = 0;
    // let mainCon = document.querySelector('.content')
    // function time() {
    //     let currentTime = new Date ();
    //     let hour = currentTime.getHours();
    //     mainTime = hour;
    //     addTimeHTML();
    // }
function time() {
    let currentTime = new Date ();
    function hours12(date) { return (date.getHours() + 24) % 12 || 12; }
    let hour = hours12(currentTime);
    let min = currentTime.getMinutes();
    if(hour < 10){
        document.querySelector(".hour").textContent = '0'+ hour;
    }else{
        document.querySelector(".hour").textContent = hour;
    }
    if(min < 10){
        document.querySelector(".min").textContent = '0'+ min ;
    }else{
        document.querySelector(".min").textContent = min ;
    }
}
time()
setInterval(() => {time();},5000);

$('.troger , .cross , .overlay').on('click',(e)=>{
    e.preventDefault()
    $('.left-nav').toggleClass('active');
    $('.overlay').toggleClass('active');
})
if($('body').hasClass('first-body')){
    var scene = $('.scene').get(0);
    var parallaxInstance = new Parallax(scene);
}
});