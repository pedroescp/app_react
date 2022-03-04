import React from "react";
import Icon from '@mui/icons-material/Add';
import TextArea from 'react-textarea-autosize';
import Card from '@mui/material/Card';
import {Button} from "@mui/material";
import { connect } from "react-redux";
import { addList, addCard } from "../actions";
import SaveIcon from '@mui/icons-material/Save';



class TrelloActionButton extends React.Component {

    state = {
        formOpen: true,
        text: "",
    }

    openForm = () => {
        this.setState({
            formOpen: true,
        });
    }

    closeForm = e => {
        this.setState({
            formOpen: false,
        })
    }

    handleInputChange = e => {
        this.setState({
            text: e.target.value
        })
    }

    handleAddList = () => {
        const { dispatch } = this.props;
        const { text } = this.state;
        
        if (text){
            dispatch(addList(text))
        }
        return;
    }

    handleAddCard = () => {
        const { dispatch, listID } = this.props;
        const { text } = this.state;

        if(text){
            dispatch(addCard(listID, text))
        }
    }

    renderFrom = () => {

        const { list } = this.props;

        const placeholder = list
            ? " Enter list tittle..."
            : "Enter a new title for this card";

        const buttonTitle = list
            ? "Add List"
            : "Add card";

        return <div>
            <Card style={styles.cardGroup}>
                <TextArea
                    placeholder={placeholder}
                    autoFocus
                    onBlur={this.closeForm}
                    value={this.state.text}
                    onChange={this.handleInputChange}
                    style={styles.textarea}
                    
                />
            </Card>
            <div style={styles.fromButtonGroup}>
            <Icon style={styles.IconButtonX}>close</Icon>
                <Button onMouseDown={list ? this.handleAddList : this.handleAddCard} variant="contained" startIcon={<SaveIcon />} style={styles.ButtonCard}>{ buttonTitle }</Button>
                
            </div>
        </div>

    }

    renderAddButton = () => {
        const { list } = this.props;

        const buttonText = list ? "Add another list" : "Add another card"
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "inherit";
        const buttonBackground = list ? "rgba(0,0,0,.15)" : "inherit";



        return (
            <div onClick={this.openForm}
                style={{ ...styles.openForButtonGroup, opacity: buttonTextOpacity, color: buttonTextColor, backgroundColor: buttonBackground, }}>
                <Icon>Add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    }

    render() {
        return this.state.formOpen ? this.renderFrom() : this.renderAddButton();
    }
}

const styles = {
    openForButtonGroup: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10,
        marginTop: 10,
    },
    fromButtonGroup:{
        display: "flex",
        alignItems: "center",
        justifyContent: "right",
    },
    textarea: {
        resize: "none",
        width: 272,
        outline: "none",
        border: "none",
        overflow: "hidden",
        //aumentar a area para o texto para baixo usando o padding bottom
        paddingBottom: 50,
        borderRadius: 3,

    },
    cardGroup: {
        overflow: "visible",
        minHeight: 80,
        minWidhth: 272,
        padding: "6px 8px 2px",
        marginTop: 10,
    },
    ButtonCard: {
        marginTop: 8,
        backgroundColor: "#0288d1",
        cursor: "pointer",
        display: "flex",
        justifyContent: "right",
    },

    IconButtonX: {
        marginRight: 8,
        marginTop: 8,
        cursor: "pointer"
    },

}

export default connect() (TrelloActionButton);