import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    Text, 
    TouchableOpacity,
    LayoutAnimation, 
    UIManager, 
    Platform 
} from 'react-native';
import { Card, CardSection } from './common';

import * as actions from '../actions';



class ListItem extends Component {
    constructor(props) {
        super(props);

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    componentWillMount() {        
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { descriptionStyle } = styles;
        const { data, expend } = this.props;

        if (expend) {
            return (
                <CardSection>
                    <Text style={descriptionStyle}>
                        {data.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.data;

        return (
            <TouchableOpacity onPress={() => this.props.selectItem(id)} activeOpacity={1} >
                <Card>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </Card>
            </TouchableOpacity>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    descriptionStyle: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10
    },
};

const mapStateToProps = (state, ownProps) => ({
    expend: state.selectedId === ownProps.data.id
});

export default connect(mapStateToProps, actions)(ListItem);
