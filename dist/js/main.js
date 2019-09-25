
function time() {
    let currentTime = new Date ();
    function hours12(date) { return (date.getHours() + 24) % 12 || 12; }
    let hour = hours12(currentTime);
    let min = currentTime.getMinutes();
    document.querySelector(".hour").textContent = hour;
    document.querySelector(".min").textContent = min;
}
time()
setInterval(() => {
    time()
},500);



$(function(){
    
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