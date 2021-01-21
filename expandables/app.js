//Defining constants
const castDetails= [
    {"actor":"Sylvester Stallone","alias":"Barney","image":"Sylvester_Stallone.jpg"   },
    {"actor":"Dolph Lundgren","alias":"Gunnar Jensen","image":"Dolph_Lundgren.jpg"},
    {"actor":"Jason Statham","alias":"Lee Christmas","image":"Jason_Statham.jpg"   },
    {"actor":"Terry Crews","alias":"Hale Caesar","image":"Terry_Crews.jpg"   },
    {"actor":"Randy Couture","alias":"Toll Road","image":"Randy_Couture.jpg"   },
    {"actor":"Jet Li","alias":"Yin Yang","image":"Jet_Li.jpg"   },
    {"actor":"Arnold Schwarzenegger","alias":"Trench","image":"Arnold_Schwarzenegger.jpg"   },
   
]
var panels=[];

/**CREATION OF CARDS */
function createPanels(){
  
    let firstElement=0;
    castDetails.forEach(e=>{        
        let t;

        //Creation of H3 Tag
        var h3=document.createElement('H3');
        h3.style.opacity=0;
        t=document.createTextNode(e.actor);
        h3.appendChild(t)


        
        //Creation of P Tag
        var p=document.createElement('P');
        p.style.opacity=0;
        t=document.createTextNode('aka'+e.alias);
        p.appendChild(t)

        //Creation of panel div
        var panel=document.createElement('DIV');
        panel.style.background=`url('./assets/${e.image}')`;
        panel.style.backgroundPosition= "center";
        panel.style.backgroundRepeat= "no-repeat";
        panel.style.backgroundSize= "cover";
        panel.style.flex=0.5;
        // panel.style.borderRadius= "20px";
        // panel.style.margin= "15px";
        if(firstElement==0)
        {panel.className='panel panel-active ';firstElement=1}
        else{panel.className='panel panel-unactive'}
        

        //Appeding Child Elements
        panel.appendChild(h3);
        panel.appendChild(p);

        //Appending CHild to Body
        let containers=document.querySelector('.container');
        containers.appendChild(panel);

    })
// ActiveFirstelement()
}

//Activates the firts Element by default
function ActiveFirstelement(){
    let firstPanel=document.querySelector('.panel-active').getElementsByTagName('H3')
    firstPanel[0].style.opacity=1;    
}

setTimeout(() => {    
panels=document.querySelectorAll('.panel');
console.log("panels",panels)
}, 500);

//Removes active class from all panels
function RemoveActiveAll(){
    panels.forEach(e=>{
        e.className=('panel panel-unactive')
    })
}

setTimeout(() => {
    panels.forEach(e=>{
        e.addEventListener('click',()=>{
            RemoveActiveAll();
            e.className='panel panel-active';
        })
    })
}, 550);