import React from "react";

//imports of cards
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

const TrelloCard = ( {text} ) => {
    return (
        <Card style={styles.cardContainer}>
            <CardContent>
                <Typography gutterBottom>
                    {text}
                </Typography>
            </CardContent>
        </Card>
    );
}

const styles = {
    cardContainer: {
        marginBottom: 8
    }
}

export default TrelloCard;