import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './TabPanel';
import WritePage from '../../pages/WritePage';
class TabList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };
  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };
  render() {
    return (
      <div>
        <AppBar position="static">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="설정하기" {...this.a11yProps(0)} />
            <Tab label="진행현황" {...this.a11yProps(1)} />
            <Tab label="보고서 " {...this.a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={this.state.value} index={0}>
          <WritePage />
        </TabPanel>
        <TabPanel value={this.state.value} index={1}>
          진행현황
        </TabPanel>
        <TabPanel value={this.state.value} index={2}>
          보고서
        </TabPanel>
      </div>
    );
  }
}
export default TabList;
