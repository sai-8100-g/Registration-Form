import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    isRegistration: false,
    firstName: '',
    secondName: '',
    firstNameError: '',
    secondNameError: '',
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, secondName} = this.state
    if (firstName === '' || secondName === '') {
      this.setState({
        firstNameError: firstName === '' ? 'Required' : '',
        secondNameError: secondName === '' ? 'Required' : '',
      })
    } else {
      this.setState({
        isRegistration: true,
        firstNameError: '',
        secondNameError: '',
      })
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeSecondName = event => {
    this.setState({secondName: event.target.value})
  }

  onBlurFirstName = event => {
    this.setState({firstNameError: event.target.value === '' ? 'Required' : ''})
  }

  onBlurSecondName = event => {
    this.setState({
      secondNameError: event.target.value === '' ? 'Required' : '',
    })
  }

  registrationForm = () => {
    const {firstName, secondName} = this.state
    const {firstNameError, secondNameError} = this.state
    return (
      <form className="userForm" onSubmit={this.onSubmitForm}>
        <label htmlFor="firstName">FIRST NAME</label>
        <input
          id="firstName"
          type="text"
          onBlur={this.onBlurFirstName}
          onChange={this.onChangeFirstName}
          value={firstName}
          placeholder="FIRST NAME"
        />
        {firstNameError && <p>{firstNameError}</p>}
        <label htmlFor="secondName">LAST NAME</label>
        <input
          id="secondName"
          type="text"
          onBlur={this.onBlurSecondName}
          onChange={this.onChangeSecondName}
          value={secondName}
          placeholder="LAST NAME"
        />
        {secondNameError && <p>{secondNameError}</p>}
        <div className="buttonCard">
          <button type="submit">Submit</button>
        </div>
      </form>
    )
  }

  onAddMoreDetails = () => {
    this.setState({isRegistration: false, firstName: '', secondName: ''})
  }

  registrationSuccess = () => (
    <div className="succesCard">
      <div className="succesImgCard">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
        />
        <p>Submitted Successfully</p>
      </div>
      <div className="succesBtnCard">
        <button type="button" onClick={this.onAddMoreDetails}>
          Submit Another Response
        </button>
      </div>
    </div>
  )

  render() {
    const {isRegistration} = this.state
    return (
      <div className="registrationCard">
        <h1 className="mainHeading">Registration</h1>
        <div className="formContainer">
          {isRegistration
            ? this.registrationSuccess()
            : this.registrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
