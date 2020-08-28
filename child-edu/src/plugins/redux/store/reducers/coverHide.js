let initCover=true
const coverHide=(state=initCover,{type,payload})=>{
    switch(type){
        case "hide":
            return payload;
        default:
            return state
    }
}
export default coverHide