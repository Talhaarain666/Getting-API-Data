import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState } from "react";

function Albums() {

    const [album, setAlbum] = useState();
    axios.get("https://jsonplaceholder.typicode.com/albums").then((response) => {
        setAlbum(response.data.map((val, i) => {
            return (<>
                <Box sx={{ padding: "3%", marginY: "1%", background: "linear-gradient(to right, #1e3c72, #2a5298)", color: "white" }} key={i}>
                    <Box display={"flex"} justifyContent="space-between">
                        <Typography variant="h6">userId = {val.userId}</Typography>
                        <Typography variant="h6">id = {val.id}</Typography>
                    </Box>
                    <Typography variant="h5">{val.title}</Typography>
                </Box>
            </>)
        }))
    })

    return (
        <>
            <Box>{album}</Box>
        </>
    )
}

export default Albums;