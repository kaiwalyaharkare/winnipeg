const latlng = (state={lat,lng},actions)=>{
    switch(actions.type){
        case 'CHANGELATLNG':{
            return state = actions.payload
        }
        default:{
            return state
        }
    }
}