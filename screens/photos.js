import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState } from "react";

function Photos() {

    const [photo, setPhoto] = useState();
    axios.get("https://jsonplaceholder.typicode.com/photos").then((response) => {
        setPhoto(response.data.map((val, i) => {
            return (<>

                <Box sx={{ padding: "3%", marginY: "1%", background: "linear-gradient(to right, #1e3c72, #2a5298)", color: "white" }} key={i}>
                    <Box display={"flex"} justifyContent="space-between">
                        <Typography variant="h6">albumId = {val.albumId}</Typography>
                        <Typography variant="h6">id = {val.id}</Typography>
                    </Box>
                    <Typography variant="h5">{val.title}</Typography>
                    <img src={val.url}></img>
                    <br />
                    <img src={val.thumbnailUrl}></img>
                </Box>
            </>)
        }))
    })
    return (
        <>
            <Box>{photo}</Box>
        </>
    )
}

export default Photos;