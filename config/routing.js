import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import PermanentDrawerLeft from "../screens/dashboard"
import Posts from "../screens/posts"
import Comments from "../screens/comments"
import Albums from "../screens/albums"
import Photos from "../screens/photos"
import Todos from "../screens/todos"
import Users from "../screens/users"


export default function AppRouting() {
    return (
        <Router>

            <Routes>
                <Route path="/dashboard/*" element={<PermanentDrawerLeft />}>

                <Route path="posts" element={<Posts />} />
                <Route path="comments" element={<Comments />} />
                <Route path="albums" element={<Albums />} />
                <Route path="photos" element={<Photos />} />
                <Route path="todos" element={<Todos />} />
                <Route path="users" element={<Users />} />
                </Route>
            </Routes>

        </Router>
    );
}
