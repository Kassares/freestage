import React, { Component } from 'react';
import { Link } from 'react-router';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      password: '',
    };
  };
  render() {
    return (
      <section id="content" className="wrapper-md animated fadeInUp">
        <div className="container aside-xl">
        	<Link className="navbar-brand block" to="/">
        		<span className="h1 font-bold">XuFreeStage</span>
        	</Link>
          <section className="m-b-lg">
            <header className="wrapper text-center">
            </header> 
            <form action="index.html">
              <div className="form-group"> 
				        <input
				          type="email"
				          placeholder="Email" 
				          className="form-control rounded input-lg text-center no-border"
				        /> 
				      </div> 
				      <div className="form-group"> 
				    		<input 
				    		  type="password" 
				    		  placeholder="Password" 
				    		  className="form-control rounded input-lg text-center no-border"
				    		/>
				      </div>
				      <button type="submit" className="btn btn-lg btn-warning lt b-white b-2x btn-block btn-rounded">
				      	<i className="icon-arrow-right pull-right"></i><span className="m-r-n-lg">Sign in</span>
				      </button> 
				      <div className="text-center m-t m-b">
				      	<a href="#"><small>Forgot password?</small></a>
				      </div>
				      <div className="line line-dashed"></div>
				      <p className="text-muted text-center"><small>Do not have an account?</small></p> 
				      <Link
				        to="/signup"
				      	className="btn btn-lg btn-info btn-block rounded">
				      	Create an account
				      </Link>
      			</form>
    			</section> 
      	</div> 
      </section>
    );
  }
}
