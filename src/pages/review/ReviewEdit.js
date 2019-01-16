import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { TextField, Button, FormControl, Input } from '@material-ui/core';
import { Mutation } from 'react-apollo';
import * as reviewMutation from '../../graphql/mutation/review';
import gql from 'graphql-tag';
import * as reviewQuery from '../../graphql/query/review'

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
  });

class ReviewEdit extends Component {

    constructor(props) {
        super(props);
        this.state= { 
            pwd : '' ,
            ID : ''
        }
    }

    handleChange = (e) => { 
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e, createReview) => { 
        e.preventDefault();
        createReview({
            variables : {
                Epi : "EMPIRE",
                Input : { 
                    stars : 1,
                    commentary : "aaaa",
                    favorite_color : {
                        red : 255,
                        green : 255,
                        blue : 255
                    }
                }
            }
        })
        this.props.history.push('/review')
    }
    
    render() {
        const { classes } = this.props;
        
        return (
            <div className="fadeIn">

                <Mutation mutation={reviewMutation.createReview()} 
                    refetchQueries={[{ query: reviewQuery.getReview("EMPIRE") }]}>   
                    {(createReview) => (
                        <form className={classes.container} noValidate autoComplete="off" onSubmit={
                            (e) => this.handleSubmit(e, createReview)
                        }>
                            <TextField
                                required    
                                id="outlined-password-input"
                                label="Password"
                                className={classes.textField}
                                name='pwd'
                                value={this.state.pwd}
                                onChange={this.handleChange}
                                type="password"
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                required
                                id="outlined-text-input"
                                label="Password"
                                className={classes.textField}
                                name='ID'
                                value={this.state.ID}
                                onChange={this.handleChange}
                                type="text"
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                            />
                             <Button type="submit" >aa</Button>        
                        </form>
                    )}
                </Mutation>
            </div>
        );
    }
}

ReviewEdit.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(ReviewEdit));