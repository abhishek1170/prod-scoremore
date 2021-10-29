import React, { useState } from "react";
import Submit from "../submit-modal";
import "./form.scss";
import { SectionIds } from "../../common/constants";
import { TextInput, Datetime, CheckboxInput, Slider, TextArea, Button } from "../../components";
import emailjs from "emailjs-com";

let DEFAULT_STATE = {
  name: "",
  email: "",
  subject: "",
  date: new Date(),
  mobile: "",
  side: "single",
  page: 0,
  desc: "",
  showValidation: false,
  loading: false,
  submitted: false
};

const ValidationText = "Please fill all * mandatory field";
class Form extends React.Component {
  state = { ...DEFAULT_STATE };
  user_id = "user_Y1EVKLlk2ZR60ipbmO9BA";

  onChange = (field, value) => {
    this.setState({ [field]: value, showValidation: false });
  };

  onClick = () => {
    let { mobile, email } = this.state;
    if (!mobile || !email) {
      this.setState({ showValidation: true });
      return null;
    }
    this.setState({ loading: true });
    emailjs.send("service_bppg67m", "template_85eoy32", this.state, this.user_id).then(
      result => {
        this.setState({ ...DEFAULT_STATE }, () => {
          this.setState({ submitted: true, loading: false });
          setTimeout(() => {
            this.setState({ submitted: false });
          }, 3000);
        });
      },
      error => {
        this.setState({ ...DEFAULT_STATE });
      }
    );
  };

  render() {
    let {
      side,
      date,
      page,
      name,
      email,
      subject,
      desc,
      mobile,
      showValidation,
      loading,
      submitted
    } = this.state;
    return (
      <div id={SectionIds.form} className='form'>
        {loading && <Submit loading={true} />}
        {submitted && <Submit loading={false} />}
        <div className='row'>
          <TextInput placeholder='Name' field='name' value={name} onChange={this.onChange} />
          <TextInput
            placeholder='Email Id *'
            field='email'
            value={email}
            onChange={this.onChange}
          />
        </div>
        <div className='row'>
          <TextInput
            placeholder='Subject'
            field='subject'
            value={subject}
            onChange={this.onChange}
          />
          <Datetime field='date' startDate={date} value={date} onChange={this.onChange} />
        </div>
        <TextInput
          placeholder='Mobile Number *'
          field='mobile'
          type='number'
          value={mobile}
          onChange={this.onChange}
        />
        {/* <div className='checkbox-selection'>
          <CheckboxInput
            isSelected={side === "single"}
            onClick={() => {
              this.onChange("side", "single");
            }}
          >
            Single Side
          </CheckboxInput>
          <CheckboxInput
            isSelected={side === "double"}
            onClick={() => {
              this.onChange("side", "double");
            }}
          >
            Double Side
          </CheckboxInput>
        </div> */}
        <div id='form-center' className='slider-heading'>
          Select wordcount
        </div>
        <Slider field='page' onChange={this.onChange} value={page} />
        <div className='description'>
          <TextArea field='desc' placeholder='Description…' value={desc} onChange={this.onChange} />
        </div>
        {showValidation && <p className='error-text'>{ValidationText}</p>}
        <Button id='form-submit' label='Submit' callBack={this.onClick} />
      </div>
    );
  }
}

const Headings = ({ primary, secondary }) => {
  return (
    <div className='headings'>
      <div className='primary'>{primary}</div>
      {/* <div className='secondary'>{secondary}</div> */}
    </div>
  );
};

const FormContainer = ({ headings }) => {
  let { submited, setSubmit } = useState(false);
  return (
    <div className='form-wrapper'>
      <div id={SectionIds["form-container"]} className='form-container'>
        <Headings {...headings} />
        <Form />
      </div>
    </div>
  );
};

FormContainer.defaultProps = {
  headings: {
    primary: "Guranteed satisfaction & timely delivery",
    secondary:
      "We have carefully prepared the specialization paths so that you can focus on learning."
  }
};

export default FormContainer;
