export const  setstopno =(stopno)=>{
    return{
        type:'CHANGESTOPNO',
        payload:stopno,
    }
}

export const setlatlng = ({lat='',lng=''})=>{
    return{
        type:'CHANGELATLNG',
        payload:{lat,lng}
    }
}