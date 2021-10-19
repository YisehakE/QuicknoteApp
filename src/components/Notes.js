
import { Button, Collapse, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import { ExpandLess, ExpandMore, Delete, Edit} from "@material-ui/icons";
import React, { Component } from "react";
import { Link } from "react-router-dom";
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
                        <Link to={ {
                            pathname: "/edit",
                            search: `?id=${note.id}`,
                            state: { 
                                title: note.title, 
                                text: note.text, 
                                id: note.id 
                            },
                        }}>
                            <Button >
                                <Edit />
                            </Button>
                        </Link>
                    </ListItemIcon>
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