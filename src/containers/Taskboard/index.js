import React, { Component } from 'react'
import { withStyles, Button, Typography } from '@material-ui/core';
import styles from './styles';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../../commons/contants'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import CardActions from '@material-ui/core/CardActions';

const listTask = [
    {
        id: 1,
        title: 'Read Docs React Js',
        description: 'Read Documents React Js fro developer',
        status: 0
    },
    {
        id: 2,
        title: 'Read Docs React Native',
        description: 'Read Documents React Native for app',
        status: 2
    },
    {
        id: 3,
        title: 'Learn Java Web',
        description: 'Read Documents Java Web for developer',
        status: 1
    },
]

class Taskboard extends Component {
    renderBoard = () => {
        let xhtml = null;
        const { classes } = this.props;
        xhtml = (
            <Grid container spacing={2}>
                {STATUSES.map((status, index) => {
                    const taskFiltered = listTask.filter(task => task.status === status.value)
                    return (
                        <Grid item md={4} xs={12} key={index}>
                            <Box m={1}>
                                <div className={classes.status}>{status.label}</div>
                            </Box>
                            <div className={classes.wrapperListTask}>
                                {taskFiltered.map(task => {
                                    return (
                                        <Card key={task.id} className={classes.card}>
                                            <CardContent>
                                                <Grid container justify="space-between">
                                                    <Grid item md={8}>
                                                        <Typography component="h2">
                                                            {task.title}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item md={4}>
                                                        {status.label}
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                            <CardActions>

                                            </CardActions>

                                        </Card>
                                    )
                                })}
                            </div>
                        </Grid>
                    );
                })}
            </Grid>
        );
        return xhtml;
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.taskBoard}>
                <Button variant="contained" color="primary">
                    <AddIcon /> Thêm công việc
                </Button>
                {this.renderBoard()}
            </div>
        )
    }
}

export default withStyles(styles)(Taskboard);
