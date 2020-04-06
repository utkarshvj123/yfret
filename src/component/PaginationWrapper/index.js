import React, { Component } from "react";
import PaginationValue from "../PaginationValue";
import Cards from "../Cards";
import "./style.css";
import { connect } from "react-redux";

class PaginationWrapper extends Component {
  constructor(props) {
    super(props);

    // an example array of items to be paged

    this.state = {
      exampleItems: [],
      pageOfItems: [],
    };
    this.onChangePage = this.onChangePage.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    if (
      state.exampleItems.length !==
      props.reduxData.dashboardData.filteredArray.length
    ) {
      return {
        exampleItems: props.reduxData.dashboardData.filteredArray,
      };
    }
  }

  componentDidMount() {
    this.setState({
      exampleItems: this.props.reduxData.dashboardData.filteredArray,
    });
  }

  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    return (
      <React.Fragment>
        <div className="gridclass">
          <Cards
            buttonVisiblity={this.props.buttonVisiblity}
            array={this.state.pageOfItems}
            addValue={this.props.addValue}
          />
        </div>
        <PaginationValue
          items={this.state.exampleItems}
          onChangePage={this.onChangePage}
        />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    reduxData: state,
  };
}

export default connect(mapStateToProps, null)(PaginationWrapper);
