import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { modalPopUp } from "../../modules/Dashboard/actions";
import ModalView from "../ModalView";

function ModalWrapper(props) {
  const modalVisibility = value => {
    props.modalPopUp(false);
  };
  return (
    <React.Fragment>
      {props.data.dashboardData.addToCartArray.length ? (
        <ModalView
          visibility={props.data.dashboardData.modalPopUp}
          modalVisibilityFunc={modalVisibility}
          dataModal={props.data.dashboardData.addToCartArray}
          buttonVisiblity={false}
        ></ModalView>
      ) : null}
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    data: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({ modalPopUp }, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalWrapper);
