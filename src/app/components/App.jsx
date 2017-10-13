import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

export default class App extends Component {
  render() {
    const routesWithoutSidebar = [
      '/signin',
      '/signup',
      '/example',
    ];

    const pageWithSidebar = (
      <div>
        <div className="vbox">
          
          <Header/>
          <section>
            <section className="hbox stretch">
              <Sidebar/>
              <section className="content">
                { this.props.children }
              </section>
            </section>
          </section>
        </div>
      </div>
    );
    
    const pageWithoutSidebar = (
      <div>
        <div className="wrappers">
          { this.props.children }
        </div>
      </div>
    );
    return routesWithoutSidebar.includes(this.props.location.pathname) ? pageWithoutSidebar : pageWithSidebar;
  }
}
