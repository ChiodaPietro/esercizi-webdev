document.addEventListener("DOMContentLoaded",()=>{
    const body=document.querySelector("body")
    const convert_btn=document.getElementById("convert");
    const result=document.createElement("label")
   const bold=document.getElementById("bold")
   const italic=document.getElementById("italic")

   const underlined=document.getElementById("underlined")

   const sub=document.getElementById("sub")

   const strike=document.getElementById("strike")

const textColor=document.getElementById("textColor")
const backColor=document.getElementById("backColor")
const size=document.getElementById("size")
    convert_btn.addEventListener("click",()=>{
        const textArea=document.getElementById("textarea")
        const text=textArea.value
        if(bold.checked){
            result.style.fontWeight=bold.value
        }else{
            result.style.fontWeight=""
        }
        if(italic.checked){
            result.style.fontStyle=italic.value;
        }else{
            result.style.fontStyle=""
        }
        if(underlined.checked){
            result.style.textDecoration=underlined.value
        }else{
            result.style.textDecoration=""
        }   
        if(strike.checked){
            result.style.textDecoration=strike.value
        }else{
            if(underlined.checked){
                result.style.textDecoration=underlined.value
            }
        }
        result.style.color=textColor.value
        result.style.backgroundColor=backColor.value
        result.style.fontSize=size.value+"px"                                                  
        result.textContent=text
        body.appendChild(result)
    })
})