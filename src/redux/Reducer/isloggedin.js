const isloggedin=(state,action)=>{
    switch(action.type){
        case"Login":{
            return state=true
        }
        default:{
            return state=false
        }
    }
    
}
export default isloggedin