import axios from 'axios';
import React, { Component } from 'react';
import Input from './input';
import * as yup from 'yup';

class Login extends Component {
  state= {
    account:{
      email: '',
      password: ''
    },
    errors: [],
    sending: false
  }

  schema = yup.object().shape({
    email: yup.string().email('فرمت ایمیل صحیح نمی باشد').required('فیلد ایمیل الزامی است'),
    password: yup.string().min(4,'پسورد حداقل 4 کاراکتر باشد')
  })

  render() { 
    const {email, password} = this.state.account;

    return (
      <>
        {
            this.state.errors.length !== 0 && (
              <div className='alert alert-danger'>
                <ul>
                  {this.state.errors.map((e,i) => <li key={i}>{e}</li>)}
                </ul>
              </div>
            )
        }
        <form onSubmit={this.handleSubmit}>
          <Input name="email" value={email} label="Email" onChange={this.handleChange} />
          <Input name="password" value={password} label="Password" onChange={this.handleChange} />
          <button className='btn btn-primary' disabled={this.state.sending}>Login</button>
        </form>
      </>
    );
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({sending: true});

    const result = await this.validate();
    if(result){
      try {
          const response =  await axios.post('https://reqres.in/api/login', result);
          localStorage.setItem('token', response.data.token);
      } catch (error) {
        this.setState({errors: ['ایمیل یا پسورد صحیح نیست']})
      }
    }
    this.setState({sending: false});
    window.location.replace('/dashboard');
  }

  validate = async () =>{
    try{
        return await this.schema.validate(this.state.account,{ abortEarly: false})
    }
    catch (error){
      this.setState({errors: error.errors})
    }
  }

  handleChange = (event) => {
    const input = event.currentTarget;
    const account = {...this.state.account};
    account[input.name] = input.value;
    this.setState({account})
  }
}
 
export default Login;