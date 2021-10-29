import React from "react";
import { Logo, Tick, Spinner } from "../../images";
import "./submit-modal.scss";

class Modal extends React.Component {
  render() {
    return (
      <div id='submit' className='overlay'>
        <div className='submit'>
          <img className='logo' src={Logo} alt='logo' />
          {this.props.loading ? (
            <>
              <div className='loader-wrapper'>
                <div className='loader' />
              </div>
              <div className='primary'>Loading...</div>
              <div className='secondary quotes'>"We are happy to provide you our services"</div>
              <div className='secondary'>
                Please wait a few moments while we process your request
              </div>
            </>
          ) : (
            <>
              <img src={Tick} alt='submited' />
              <div className='primary'>Thank You !</div>
              <div className='secondary quotes'>"We are happy to provide you our services"</div>
              <div className='secondary'>
                Your response have been recorded. we will contact you shortly on your respected
                contact
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Modal;
