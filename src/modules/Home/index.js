import React, { Component } from "react";
import CsvReader from "../../component/CsvReader";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCsvData } from "./actions";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: [],
      errorStatus: false
    };
  }

  //----------Passing the values to Csv Render component--------//

  completedStatus = (results, file) => {

    // results={ data: [], errors:[{
    //     type: "",     // A generalization of the error
    //     code: "",     // Standardized error code
    //     message: "Error occured",  // Human-readable details
    //     row: 0,       // Row index of parsed data where error is
  
    //   }] }
    if (results.data.length) {
      this.setState({ error: results.errors, errorStatus: false });
      this.props.history.push('/dash');
      return this.props.getCsvData({
        data: results.data,
        errorStatus: false,
        errors: results.errors
      });
    } else if (results.errors.length) {
      this.setState({ error: results.errors, errorStatus: true });

      return this.props.getCsvData({
        data: [],
        errorStatus: true,
        errors: results.errors
      });
    } else {
      this.setState({ error: [{ message: "Connection error" }], errorStatus: true });

      return this.props.getCsvData({
        data: [],
        errorStatus: false,
        errors: [{ message: "Connection error" }]
      });
    }
  };

  render() {
    return (
      <div>
        <CsvReader
          parserOptions={{
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true,
            transformHeader: header => header.toLowerCase().replace(/\W/g, "_"),
            complete: this.completedStatus
          }}
        />
        {this.state.errorStatus ? <h6>{this.state.error[0]["message"]}</h6> : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
 return {
    data: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({ getCsvData }, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);

