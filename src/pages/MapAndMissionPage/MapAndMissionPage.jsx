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
// import Map from '../../assets/map.png'
import '../MapAndMissionPage/MapAndMissionPage.css'
import { FaSearch } from "react-icons/fa";
import { datafake, maps } from '../../dataFake'

function MapAndMissionPage() {
const [searchFilter, setSearchFilter] = React.useState("");
const [filterMaps, setFilterMaps] = React.useState();
// const [data, setData] = useState(maps);


const hadleSearchFilter = ({ target: { value } }) => {
    setSearchFilter(value);
    datafake.filter((map)=> {
        for (const map in maps) {
            if (map[key].toLowerCase().includes(value.toLowerCase())) return true;
        }
    })
}

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
                        onChange={hadleSearchFilter}
                        customStyles={{ width: "300px" }}
                        onBlur={(event) =>
                          hadleSearchFilter(event.target.name, event.target.value)
                        }
                    />
                    <i 
                        className="users_icon" 
                        onClick={hadleSearchFilter}
                        >
                            <FaSearch />
                    </i>
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
                                <Button size="small" style={{color: "white", borderStyle:"solid", borderColor:"white", borderWidth:"1px", borderRadius:"10px"}}>Learn More</Button>
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