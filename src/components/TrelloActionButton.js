import React from "react";
import Icon from '@mui/icons-material/Add';
import TextArea from 'react-textarea-autosize';
import Card from '@mui/material/Card';
import {Button} from "@mui/material";
import { connect } from "react-redux";
import { addList, addCard } from "../actions";



class TrelloActionButton extends React.Component {

    state = {
        formOpen: false,
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
                <Button onMouseDown={list ? this.handleAddList : this.handleAddCard} variant="contained" style={styles.ButtonCard}>{ buttonTitle }</Button>
                <Icon style={styles.IconButtonX}>close</Icon>
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
    },
    fromButtonGroup:{
        marginTop: 8,
        display: "flex",
        alignItems: "center"
    },
    textarea: {
        resize: "none",
        width: 272,
        outline: "none",
        border: "none",
        overflow: "hidden"
    },
    cardGroup: {
        overflow: "visible",
        minHeight: 80,
        minWidhth: 272,
        padding: "6px 8px 2px"
    },
    ButtonCard: {
        color: "white",
        backgroundColor: "",
        marginTop: 8,
        backgroundColor: "#5aac44",
        cursor: "pointer"
    },

    IconButtonX: {
        marginLeft: 8,
        cursor: "pointer"
    },

}

export default connect() (TrelloActionButton);