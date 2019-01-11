
import React from 'react';

const Container = (props) => {
  return(
    <div className="row center" style={{"width":"100%"}}>
      <div className="col-lg-5 col-md-5 col-sm-2 col-xs-5">
         {props.children}
      </div>
    </div>
  );
}

export default Container;
