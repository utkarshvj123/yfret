import React, { useState, useEffect } from "react";
import "./style.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {modalPopUp} from '../../modules/Dashboard/actions';
import ModalWrapper from "../ModalWrapper";
import ModalView from "../ModalView";

function Cart(props) {
  const cartTotal = props.data.dashboardData.cartTotal;
  const [getTotal, setTotal] = useState(cartTotal);

  const  mouseover=()=>{
    props.modalPopUp(true);
  }


  useEffect(() => {
    setTotal(cartTotal);
  }, [cartTotal]);
  return (
    <React.Fragment>
      <span className="total">{getTotal === 0 ? " " : getTotal}</span>
      <span>
        <i onMouseOver={mouseover} className="fa fa-shopping-cart" aria-hidden="true" />
      </span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
