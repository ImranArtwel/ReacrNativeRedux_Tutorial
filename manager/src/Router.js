import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    const { headerStyle, sceneStyle } = styles;
    return (
        <Router sceneStyle={sceneStyle}>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene
                        key="login"
                        component={LoginForm}
                        title="Please login"
                        titleStyle={headerStyle}
                        initial
                    />
                </Scene>

                <Scene key="main">
                    <Scene
                        initial
                        rightTitle="Add"
                        onRight={() => { Actions.employeeCreate(); }}
                        key="employeeList"
                        component={EmployeeList}
                        title="Employees"
                        titleStyle={headerStyle}
                    />

                    <Scene
                        key="employeeCreate"
                        component={EmployeeCreate}
                        title="Create Employee"
                    />

                    <Scene
                        key="employeeEdit"
                        component={EmployeeEdit}
                        title="Edit Employee"
                    />

                </Scene>
                

            </Scene>
        </Router>
    );
};

const styles = {

    headerStyle: {
        textAlign: 'center',
        flex: 1
    },
    sceneStyle: {
        paddingTop: 5
    }
};

export default RouterComponent;
