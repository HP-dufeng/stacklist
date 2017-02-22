import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class List extends Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.dataSource = ds.cloneWithRows(this.props.dataList);
    }

    renderRow(rowData) {
        return <ListItem data={rowData} />;
    }

    render() {    
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => ({
    dataList: state.items 
});

export default connect(mapStateToProps)(List);
