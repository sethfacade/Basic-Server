import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, BrowserRouter } from "react-router-dom";
import {Home} from "./components";

class Routes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />
      </Switch>
    );
  }
}
// const mapState = (state) => {
//   return {};
// };

// const mapDispatch = (dispatch) => {
//   return {};
// };
// export default withRouter(connect(mapState, mapDispatch)(Routes));
export default Routes;
