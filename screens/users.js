import { List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import DataList from "../components/datalist";

function Users() {

    const [user, setUser] = useState();
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
        setUser(response.data.map((val, i) => {
            return (<>
                <Box sx={{ padding: "3%", minWidth: "1000px", marginY: "1%", background: "linear-gradient(to right, #1e3c72, #2a5298)", color: "white" }} key={i}>

                    <Typography textAlign={"end"} variant="h6">id = {val.id}</Typography>
                    <Typography variant="h5"><span className="yellowClr">Name: </span>{val.name}</Typography>
                    <Typography variant="h6"><span className="yellowClr">User Name: </span>{val.username}</Typography>
                    <Typography variant="h6"><span className="yellowClr">Email: </span>{val.email}</Typography>
                  
                    <Typography variant="h5" sx={{ background: "linear-gradient(to right, #eacda3, #d6ae7b)", color: "black", marginY: "1.5%" }}>Address</Typography>
                    <DataList spanText="Street: " val={val.address.street} />
                    <DataList spanText="Suite: " val={val.address.suite} />
                    <DataList spanText="City: " val={val.address.city} />
                    <DataList spanText="Zip Code: " val={val.address.zipcode} />
                    <DataList spanText="Lat: " val={val.address.geo.lat} />
                    <DataList spanText="Lng: " val={val.address.geo.lng} />
                    <DataList spanText="Phone: " val={val.phone} />
                    <DataList spanText="Website: " val={val.website} />
                  
                    <Typography variant="h5" sx={{ background: "linear-gradient(to right, #eacda3, #d6ae7b)", color: "black", marginY: "1.5%" }}>Company Details</Typography>
                    <DataList spanText="Company Name: " val={val.company.name} />
                    <DataList spanText="Company Catch Phrase: " val={val.company.catchPhrase} />
                    <DataList spanText="Company Bs: " val={val.company.bs} />

                </Box>
            </>)
        }))
    })

    return (
        <>
            <Box>{user}</Box>
        </>
    )
}

export default Users;