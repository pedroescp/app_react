import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloButton from "../actions/TrelloActionButton";
import { height } from "@mui/system";

const TrelloList = ({ title, cards }) => {
    return (
        <div style={styles.container }>
            <h4>{title}</h4>

            { cards.map(card => (
            <TrelloCard text={card.text} />
            ))}
            <TrelloButton/>
        </div>
    )
};

const styles = {
    container: {
        backgroundColor: "#ccc",
        borderRadius: 3,
        width: 300,
        padding: 8,
        marginRight: 8,
        height: "100%"
    }
}

export default TrelloList;