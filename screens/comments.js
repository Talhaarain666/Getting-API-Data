import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState } from "react";

function Comments() {

    const [comment, setComment] = useState();

    axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
        setComment(response.data.map((val, i) => {
            return (
                <>
                    <Box sx={{ padding: "3%", marginY: "1%", background: "linear-gradient(to right, #1e3c72, #2a5298)", color: "white" }} key={i}>
                        <Box display={"flex"} justifyContent="space-between">
                            <Typography variant="h6">postId = {val.postId}</Typography>
                            <Typography variant="h6">id = {val.id}</Typography>
                        </Box>
                        <Typography variant="h5">{val.name}</Typography>
                        <Typography variant="h5">{val.email}</Typography>
                        <Typography variant="p">{val.body}</Typography>
                  </Box>
                </>
            )
        }))
    })

    return (
        <>
            <Box>{comment}</Box>
        </>
    )
}

export default Comments;