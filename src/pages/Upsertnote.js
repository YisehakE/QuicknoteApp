import React, { Component } from "react";
import { Button, FormControl, Paper, TextField} from "@material-ui/core"
import { withRouter } from "react-router"



const styles = {
    form: {
      marginTop: "2rem",
      marginBottom: "1rem",
      padding: "1rem",
    },
    paper: {
      marginBottom: "1rem",
    },
};

class Upsertnote extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            text: "",

        }
    }


    componentDidMount() {
        const { state } = this.props.location;
            if (state) {
                const { id, title, text } = state;
                this.setState({
                    id,
                    title,
                    text,
                });
            }
    }


   
    render() {

        return (
            <form style={styles.form}>
                <Paper elevation={3} style={styles.paper}>
                    <FormControl fullWidth>
                        <TextField 
                            label="Title" 
                            variant="outlined" 
                            value={this.state.title}
                            onChange={this.updateTitle}
                        />
                    </FormControl>
                </Paper>
                <Paper elevation={3} style={styles.paper}>
                    <FormControl fullWidth>
                        <TextField 
                            label="Text" 
                            multiline 
                            rows={6} 
                            variant="outlined" 
                            value={this.state.text}
                            onChange={this.updateText}/>
                    </FormControl>
                </Paper>

                <div>
                    <Button type="button" color="secondary" onClick={this.handleCancel} >
                    Cancel
                    </Button>
                    <Button type="submit" color="primary" onClick={this.handleSubmit}>
                    Submit
                    </Button>
                </div>
            </form>
        );
    }

    updateTitle = (event) => {
        event.preventDefault()
        this.setState({title: event.target.value})
    }

    updateText = (event) => {
        event.preventDefault();
        this.setState({text: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.upsertNote(this.state);
        this.props.history.push("/");
    }
    handleCancel = (event) => {
        event.preventDefault();
        this.props.history.push("/");

    }
    
}

export default withRouter(Upsertnote);