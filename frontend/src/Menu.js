import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '360px',
    height: 'fit-content',
    backgroundColor: theme.palette.background.paper,
    // padding: '0 30px',
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class Menu extends Component {
  state = {
    channelsSelected: false,
    userSelected: false,
  };

  handleClick = (category) => {
    this.setState(state => ({ [category]: !state[category] }));
  };

  render() {
    const { classes, changeCategory } = this.props;

    return (
      <Paper className={classes.root}>
        <List
          component="nav"
          subheader={<ListSubheader component="h2">Results</ListSubheader>}
        >
          <ListItem button onClick={() => changeCategory('workspace')}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText inset primary="Workspace" />
            {/* {this.state.channelsSelected ? <ExpandLess /> : <ExpandMore />} */}
          </ListItem>
          {/* <Collapse in={this.state.channelsSelected} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary="1" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary="2" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary="3" />
            </ListItem>
          </List>
        </Collapse> */}
          <ListItem button onClick={() => this.handleClick('channelsSelected')}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText inset primary="Groups" />
            {this.state.channelsSelected ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.channelsSelected} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="1" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="2" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="3" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={() => this.handleClick('userSelected')}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText inset primary="Employees" />
            {this.state.userSelected ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.userSelected} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="1" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="2" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="3" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Paper>
    );
  }
}

export default withStyles(styles)(Menu);