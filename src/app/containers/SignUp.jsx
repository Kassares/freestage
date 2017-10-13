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
      <section id="content" className="wrapper-md animated fadeInDown">
        <div className="container aside-xl"> 
          <Link 
          className="navbar-brand block"
          to="/"
          >
            <span className="h1 font-bold">FreeStage</span>
          </Link> 
          <section className="m-b-lg">
            <header className="wrapper text-center"> 
            </header>
            <form action="index.html">
              <div className="form-group"> 
                <input 
                  placeholder="Имя" 
                  className="form-control rounded input-lg text-center no-border"
                />
              </div> 
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
                  placeholder="Пароль"
                  className="form-control rounded input-lg text-center no-border"
                />
              </div> 
              <div className="checkbox i-checks m-b"> 
                <label className="m-l">
                  <input 
                    type="checkbox" 
                    checked=""
                  />
                  <i></i> Согласен с <Link href="#">Соглашением об использовании</Link>
                </label> 
              </div>
              <button type="submit" className="btn btn-lg btn-warning lt b-white b-2x btn-block btn-rounded">
                <i className="icon-arrow-right pull-right"></i>
                <span className="m-r-n-lg">Создать аккаунт</span>
              </button>
              <div className="line line-dashed"></div> <p className="text-muted text-center"><small>Уже есть аккаунт?</small></p> 
              <Link
                to="/signin"
                className="btn btn-lg btn-info btn-block btn-rounded"
              >
                 Войти
              </Link>
            </form> 
          </section>
        </div> 
      </section>
    );
  }
}
