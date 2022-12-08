export const wrapper = ()=>{
    const style =document.createElement("style");
    style.innerHTML=`
    html *{
         display:grid !important;
    } 
    `
    document.body.append(style)
}
