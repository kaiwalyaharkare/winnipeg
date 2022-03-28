const stopnoReducer = (state='',action) =>{
    switch(action.type){
        case 'CHANGESTOPNO':{
            return state=action.payload
        }
        default:{
            return state
        }
    }

}
export default stopnoReducer