import React from "react";
import { AppBar, Typography } from "@mui/material";

const NavBar = () => {
    return (
        <AppBar position="static" style={{
            height: "100%",
            marginBottom: "1rem",
            width: "100%"
        }}>
            <Typography
            style={{
                display: "flex",
                justifyContent: "center",
            }}>
                <h3>Trello list</h3>
            </Typography>
        </AppBar>
    );
};

export default NavBar;