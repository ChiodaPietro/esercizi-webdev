
const cibo=[ marghe={
    nome:"marghe",
    ingredienti:[
        "pomodoro","mozzarella"
    ]
},
 giorgia={
nome:"giorgia",
    ingredienti:[
        "pomodoro","rucola"
    ]
}
,
 gio={
    nome:"gio",
    ingredienti:[
        "formaggio","morto"
    ]
}
,
 vai={
    nome:"vai",
    ingredienti:[
        "vai","via"
    ]
}]


document.addEventListener("DOMContentLoaded", ()=>{
    const pizza_btn=document.getElementById("pizzaBtn")
    const calzone_btn=document.getElementById("calzoneBtn")

    const piadina_btn=document.getElementById("piadinaBtn")
    pizza_btn.addEventListener("click",()=>{
        createSelectTag([cibo[0], cibo[1]])
    })  
    calzone_btn.addEventListener("click",()=>{
        createSelectTag([cibo[2], cibo[3]])
    })
    piadina_btn.addEventListener("click",()=>{
        createSelectTag([cibo[3]])

    })
})

function createSelectTag(tipologie){
    const body=document.querySelector("body")
    let selector=document.getElementById("selector");
    if(selector==undefined){
        
        selector=document.createElement("select");
        selector.id="selector";
        tipologie.map((tipo)=>{
            const opt=document.createElement("option")
            opt.value=tipo['nome'];
            opt.textContent=tipo['nome'];
            selector.appendChild(opt);
        })
        personalize()
        body.appendChild(selector);
    }else{
        selector.textContent="";
        tipologie.map((tipo)=>{
            const opt=document.createElement("option")
            opt.value=tipo['nome'];
            opt.textContent=tipo['nome'];
            selector.appendChild(opt);
        })
    }
    
    
}

function personalize(){
    const body=document.querySelector("body");
    const personalize_btn=document.createElement("button");
    const ingredientsBOx=document.createElement("div");
    personalize_btn.id="personalize"
    personalize_btn.value="personalize"
    personalize_btn.textContent="personalize"

    
    ingredientsBOx.id="ingredientsBOx";


    personalize_btn.addEventListener("click",()=>{
    const selector=document.getElementById("selector");
        
       cibo.forEach(element => {
        if(element['nome']==selector.value){
            ingredientsBOx.textContent="";
            element['ingredienti'].forEach(ingrediente=>{
                const checkBox=document.createElement("input");
                const label=document.createElement("label")
                checkBox.type="checkbox";
                checkBox.value=ingrediente;
                
                label.textContent=ingrediente;
                ingredientsBOx.appendChild(checkBox)
                ingredientsBOx.appendChild(label);
            })
        }
       });
       body.appendChild(ingredientsBOx);
    })
    body.appendChild(personalize_btn)

}