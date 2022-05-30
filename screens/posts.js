import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";


function Posts() {

    const baseURL = "https://jsonplaceholder.typicode.com/posts";
    const [post, setPost] = useState();

    axios.get(baseURL).then((response) => {
        setPost(response.data.map((x, i) => {
            return (<>
                <Box sx={{ padding: "3%", marginY: "1%", background: "linear-gradient(to right, #1e3c72, #2a5298)", color: "white" }} key={i}>
                    <Box display={"flex"} justifyContent="space-between">
                        <Typography variant="h6">ID = {x.id}</Typography>
                        <Typography variant="h6">User Id = {x.userId}</Typography>
                    </Box>
                    <Typography variant="h5">{x.title}</Typography>
                    <Typography variant="p">{x.body}</Typography>
                </Box>
            </>)
        }));
    });

    return (
        <>
            <Box>
                {post}
            </Box>
        </>

    )
}

export default Posts;