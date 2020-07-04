let audio = document.querySelector('audio');
let btn = document.querySelector('.button');

/*btn.addEventListener('click',(e) => {
e.preventDefault();

});*/
let sonne = () => {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
     let h = document.querySelector('.h').value;   
let m = document.querySelector('.m').value;
    let source = document.createElement('source') ;
    source.setAttribute('src','perfect-time.mp3');
    source.setAttribute('type','audio/mpeg');
    if(m == minute && h == hour ){
        audio.append(source);
    }else{
        audio.setAttribute('style',"display: none;");
    }

 };
 setInterval(sonne,1000)
