import React from 'react'
import AuthHeader from '../../components/AuthHeader/AuthHeader'
import SideBar from '../../components/SideBar/SideBar'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Map from '../../assets/map.png'
import '../MapAndMissionPage/MapAndMissionPage.css'
import { maps } from '../../dataFake'

function MapAndMissionPage() {
let allMaps = maps.map((value) => value)
console.log(allMaps)
maps.slice(0, 3).map((item)=> console.log(item))
// let seperateElements = []
// let eachRow = []
// function seperateToRowes(){
//     for(i=0; i<allMaps.length; i+=3){
//         eachRow.push(allMaps.slice(i, i+3).map(item => {
//             return <div>{item}</div>
//         }))
//         seperateElements.push(eachRow.map(item => {return <div>{item}</div>}))
//     }
// return seperateElements;
// }
// console.log(seperateToRowes)

  return (
    <div className='mapAndMission_main'>
        <AuthHeader />
        <div className='mapAndMission_content'>
            <SideBar />
            <div className='mapAndMission_body'>
                <div className='mapAndMission_hedline'>
                    Map Viewer
                </div>
                <div className='mapAndMission_cards'>
                    {maps.map((value) => 
                    <Card sx={{ maxWidth: 300,backgroundColor:"gray", borderStyle:"solid", borderColor:"white", borderWidth:"1px", margin: "10px" }}>
                        <CardMedia style={{backgroundColor:"gray"}}>
                        <CardContent>
                            <CardMedia component="img" alt={value.name} height="140"  image={value.map}></CardMedia>
                            <Typography gutterBottom variant="h5" component="div">{(value.name)}</Typography>
                            <Typography variant="body2" color="text.secondary">{value.description}</Typography>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </CardContent>
                        </CardMedia>
                    </Card>)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default MapAndMissionPage