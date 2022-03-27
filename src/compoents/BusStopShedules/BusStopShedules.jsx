import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getStopschedule } from '../../api'
import {Button, FormControl, InputLabel,TextField,Paper,} from '@mui/material'



export default function BusStopShedules() {
const [stopSchedule, setstopSchedule] = useState([])
const [stop,setStop] = useState([])
useEffect(()=>{
    getStopschedule().then((data)=>{
        console.log(data)
        setstopSchedule(data)
    }
    )
},[stop])

return (
    <Paper>
      <h2>Enter Stop Number </h2>

      <TextField
        label={"Stop Number"} //optional
      />
      <Button onChange={(e,value)=>(setStop(value))}>Submit</Button>
    </Paper>
)
}

