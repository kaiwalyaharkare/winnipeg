const stopnoReducer = (state='',action) =>{
    switch(action.type){
        case'SET':{
            return state = 1
        }
        default:{
            return state
        }
    }

}
export default stopnoReducer