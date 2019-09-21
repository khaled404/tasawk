$(function(){
    
    $('.troger , .cross , .overlay').on('click',(e)=>{
        e.preventDefault()
        $('.left-nav').toggleClass('active');
        $('.overlay').toggleClass('active');
    })
    
    var scene = $('.scene').get(0);
    var parallaxInstance = new Parallax(scene);
    });
  