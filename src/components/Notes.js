
import { Button, Collapse, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import { ExpandLess, ExpandMore, Delete} from "@material-ui/icons";
import React, { Component } from "react";
class Notes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    render() {
        const { note, deleteNote } = this.props;
        const { open } = this.state;

        return (
            <>
                <ListItem >
                    <ListItemIcon onClick={this.handleClick}>
                        { open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemIcon>
                    <ListItemText primary={note.title} />
                    <ListItemIcon>
                        <Button onClick={ () => {deleteNote(note)} }>
                            <Delete />
                        </Button>
                    </ListItemIcon>
                </ListItem>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <ListItem>
                        <ListItemText secondary={note.text} />
                    </ListItem>
                </Collapse>
            </>
        );

    }


    handleClick = () => {
        this.setState({open: !this.state.open});
    }




}

export default Notes;