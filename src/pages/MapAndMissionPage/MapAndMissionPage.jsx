import React from 'react'
import AuthHeader from '../../components/AuthHeader/AuthHeader'
import SideBar from '../../components/SideBar/SideBar'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Input from "../../components/Generic/Input/Input";
import '../MapAndMissionPage/MapAndMissionPage.css'
import { FaSearch } from "react-icons/fa";
import { datafake, maps } from '../../dataFake'

function MapAndMissionPage() {
const [searchFilter, setSearchFilter] = React.useState("");
const [filterMaps, setFilterMaps] = React.useState();
const [openMapInformation, setOpenMapInformation] = React.useState();
// const [data, setData] = useState(maps);

const searchMaps = (searchFilter) =>{
    setSearchFilter(searchFilter)
    if (searchFilter !== ""){
        const filteredData = maps.filter((item) => {
            return Object.values(item).join("").toLowerCase().includes(searchFilter.toLowerCase())
        })
        setFilterMaps(filteredData)
    }
    else {
        setFilterMaps(maps)
    }
}
console.log(searchFilter)

const filteredMaps = maps.filter((item) => {
    return Object.values(item).join('').toLowerCase().includes(searchFilter.toLowerCase())
})
console.log(filteredMaps)


  return (
    <div className='mapAndMission_main'>
        <AuthHeader />
        <div className='mapAndMission_content'>
            <SideBar />
            <div className='mapAndMission_body'>
                <div className='mapAndMission_hedline'>
                    Map Types and Characteristics
                </div>
                <div className="mapAndMission_operations">
                    <Input
                        name={"search"}
                        value={searchFilter}
                        placeholder="Search"
                        onChange={(e) => searchMaps(e.target.value)}
                        customStyles={{ width: "300px" }}
                        // onBlur={(event) =>
                        //   hadleSearchFilter(event.target.name, event.target.value)
                        // }
                    />
                    <i 
                        className="users_icon" 
                        //onClick={hadleSearchFilter}
                        >
                            <FaSearch />
                    </i>
                </div>
                <div className='mapAndMission_cards'>
                    {searchFilter.length > 1 ? (
                        filterMaps.map((item) => {
                            return (
                                <Card sx={{ maxWidth: 300, backgroundColor:"gray", borderStyle:"solid", borderColor:"white", borderWidth:"1px", margin: "10px", display:"flex", flexDirection:"column", justifyContent:"space-around" }}>
                                    <CardMedia>
                                        <CardContent style={{display:"flex", flexDirection:"column", justifyContent:"space-evenly", alignItems:"center"}}>
                                            <CardMedia component="img" alt={value.name} height="140"  image={value.map} style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}></CardMedia>
                                            <Typography gutterBottom variant="h5" component="div">{(value.name)}</Typography>
                                            <Typography variant="body2" color="text.secondary">{value.description}</Typography>
                                            <CardActions>
                                                <Button size="small" style={{color: "white", borderStyle:"solid", borderColor:"white", borderWidth:"1px", borderRadius:"10px", marginTop:"10px"}}>Learn More</Button>
                                            </CardActions>
                                        </CardContent>
                                    </CardMedia>
                                </Card>
                            )
                        })
                    ) : (
                    maps.map((value) => {
                        return (
                        <Card sx={{ maxWidth: 300, backgroundColor:"gray", borderStyle:"solid", borderColor:"white", borderWidth:"1px", margin: "10px", display:"flex", flexDirection:"column", justifyContent:"space-around" }}>
                            <CardMedia>
                            <CardContent style={{display:"flex", flexDirection:"column", justifyContent:"space-evenly", alignItems:"center"}}>
                                <CardMedia component="img" alt={value.name} height="140"  image={value.map} style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}></CardMedia>
                                <Typography gutterBottom variant="h5" component="div">{(value.name)}</Typography>
                                <Typography variant="body2" color="text.secondary">{value.description}</Typography>
                                <CardActions>
                                    <Button size="small" style={{color: "white", borderStyle:"solid", borderColor:"white", borderWidth:"1px", borderRadius:"10px", marginTop:"10px"}}>Learn More</Button>
                                </CardActions>
                            </CardContent>
                            </CardMedia>
                        </Card>
                        )
                        })
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default MapAndMissionPage