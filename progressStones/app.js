const progress=document.getElementById('progress');
const next=document.getElementById('next');
const prev=document.getElementById('prev');
const circles=document.querySelectorAll('.circle');
const marvelBg=document.getElementById('marvel-bg');


marvelBg.style.background="url('./assets/space.jpg')"
marvelBg.style.backgroundRepeat='no-repeat';
marvelBg.style.backgroundSize='contain';
marvelBg.style.backgroundPositionX="right";

let currentStage=1;
next.addEventListener('click',()=>{
    currentStage=(currentStage>circles.length)?circles.length:currentStage+1;
    updateEvent()
    console.log('Cu',currentStage)
})


prev.addEventListener('click',()=>{
    currentStage=(currentStage<1)?1:currentStage-1;
    updateEvent()
})

function Changebackground(stonename){
    marvelBg.style.background=`url('./assets/${stonename}.jpg')`
marvelBg.style.backgroundRepeat='no-repeat';
marvelBg.style.backgroundSize='contain';
marvelBg.style.backgroundPositionX="right";

}
function updateEvent(){
    circles.forEach((e,i)=>{
        if(i==currentStage-1){
            e.classList.add('active');
            console.log("e",e.id)
            Changebackground(e.id);
        }else{
            e.classList.remove('active');
        }
    })

    const actives=document.querySelectorAll('.active');
    progress.style.width=((actives.length-1)/(circles.length-1)*100)+'%'
    if(currentStage===1){prev.disabled=true}
    else if(currentStage===circles.length){next.disabled=true}
    else{prev.disabled=false;next.disabled=false}
}