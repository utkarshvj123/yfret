import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "../../component/NavBar";
import { bindActionCreators } from "redux";
import { addedToCartArray,filteredArray } from "./actions/index";
import PaginationWrapper from "../../component/PaginationWrapper";
import { findFromArray, getCompleteArray } from "../../constants/globalFunctions";
import DropdownMain from "../../component/DropdownMain";
import ModalWrapper from "../../component/ModalWrapper";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataObj: this.props.data.homeData.getCsvData,
      data: [],
      addedToCartArrayState: [],
      options: [],
      defaultOption: "All",
      completeData:[]
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.dataObj !== props.data.homeData.getCsvData) {
      props.data.homeData.getCsvData.data.forEach(obj => (obj["add"] = true));

      const newArray=findFromArray(props.data.homeData.getCsvData.data,"category");
     console.log(newArray,"...newArray");
     newArray.newCategories.push("All");
      // debugger;
      props.filteredArray(props.data.homeData.getCsvData.data);
      return {
        options:newArray.newCategories,
        data: props.data.homeData.getCsvData.data,
        dataObj: props.data.homeData.getCsvData,
        completeData:props.data.homeData.getCsvData.data
      };
    } else return state;
  }
  cartValue = [];

  addValue = (selectedObj, index, type) => {
    if (type === "add") {
      selectedObj["add"] = false;
      this.cartValue.push(selectedObj);
      this.setState({ addedToCartArrayState: this.cartValue }, () => {
        this.props.addedToCartArray(this.state.addedToCartArrayState);
      });
    } else {
      selectedObj["add"] = true;
      const filteredArray = this.state.addedToCartArrayState.filter(obj => {
        return obj["_id"] !== selectedObj["_id"];
      });
      this.cartValue = filteredArray;
      this.setState({ addedToCartArrayState: this.cartValue }, () => {
        this.props.addedToCartArray(this.state.addedToCartArrayState);
      });
    }
  };

  onSelectOption = selected => {
    if(selected.value === "All"){
      this.props.filteredArray(this.state.completeData);
      return this.setState({data:this.state.completeData});
    }else{
      let newData=getCompleteArray(this.state.completeData,selected.value,"category");
      this.setState({data:newData,defaultOption:selected})
      this.props.filteredArray(newData);
    }
  };

  
  render() {
    return (
      <div className="wrapperPage">
        <div className="row m-0" style={{ marginLeft: "0px", marginRight: "0px" }}>
          <NavBar />
        </div>
        <div className="row dropdown">
          <DropdownMain
            options={this.state.options}
            defaultOption={this.state.defaultOption}
            onSelect={this.onSelectOption}
          />
        </div>
        <div className="row m-0">
          {this.state.data.length ? (
            <PaginationWrapper
              array={this.state.data}
              addValue={this.addValue}
            />
          ) : null}
        </div>
        <ModalWrapper/>
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
    ...bindActionCreators({ addedToCartArray,filteredArray }, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
