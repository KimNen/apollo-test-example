import React, { Component, Fragment } from 'react';
import { Button } from 'reactstrap';
import { Link, Switch, Route } from 'react-router-dom'
import reviewEdit from './ReviewEdit';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Table, TableHead, TableBody, TableCell, TableRow, } from '@material-ui/core';
import { Query, readQuery } from "react-apollo";
import * as reviewGql from '../../graphql/query/review';
import Loading from '../loading/Loading'
import Error from '../error/Error'
import { QueryManager } from 'apollo-client/core/QueryManager';
import client from '../../components/client'

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});

class Review extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
    }

    render() {
        const { classes } = this.props;
        console.log(client)
        return (
            <Query
                query={reviewGql.getReview("EMPIRE")}
                // pollInterval ={500}
                partialRefetch = {true}
            >
                {({ loading, error, data }) => {
                    if (loading) return <Loading />
                    if (error) return <Error />
                    console.log(data)
                    return (
                        <Fragment>
                            <div>
                                <Link to='/review/edit'>리뷰 추가</Link>
                            </div>
                            <div>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Dessert (100g serving)</TableCell>
                                            <TableCell >Calories</TableCell>
                                            <TableCell >Fat(g)</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {data.reviews.map((row, idx) => {
                                            return (
                                                <TableRow className={classes.row} key={idx}>
                                                    <TableCell component="th" scope="row">
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell >{row.calories}</TableCell>
                                                    <TableCell >{row.fat}</TableCell>
                                                    <TableCell >{row.carbs}</TableCell>
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </div>
                        </Fragment>
                    )
                }}
            </Query>)
    }
}

Review.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Review);