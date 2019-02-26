import React, { Component } from "react";
import { View } from "react-native";
import firebase from "react-native-firebase";
import { Header, Button, CardSection, Spinner } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = { logggedIn: null };
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ logggedIn: true });
      } else {
        this.setState({ logggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.logggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
