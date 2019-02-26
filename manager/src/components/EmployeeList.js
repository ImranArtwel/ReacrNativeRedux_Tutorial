import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import ListItem from './ListItem';
import {
    employeesFetch
} from '../actions';

 
class EmployeeList extends Component {
    componentDidMount() {
        this.props.employeesFetch();
    }
    
    render() {
        return (
            <FlatList
                
                data={this.props.employees}
                renderItem={employee => <ListItem employee={employee.item} />}
                keyExtractor={employee => employee.uid}
                
            />
        );
    }
}
 
const mapStateToProps = (state) => {
    const employees = _.map(state.employees, (val, uid) => ({ ...val, uid }));
        
    return { employees };
};
 
export default connect(mapStateToProps, {
    employeesFetch 
})(EmployeeList);
