import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const AsideLink = ({link, iconName, iconType, text, isBold, badgeCount, badgeColor }) => {
  return (
    <li>
      <a href={link}> 
        <i className={`icon-${iconName} icon ${iconType ? 'text-'+iconType : ''}`}></i>
        {!!badgeCount ? <b className={`badge bg-${badgeColor} pull-right`}>{badgeCount}</b> : null}
        <span className={isBold ? 'font-bold' : ''}>{text}</span>
      </a>
    </li>    
  );
};

AsideLink.propTypes = {
  link: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  iconType: PropTypes.string,
  isBold: PropTypes.bool,
  text: PropTypes.string.isRequired,
  badgeCount: PropTypes.number,
  badgeColor: PropTypes.string,
};

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true,
    };
    
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }
  
  toggleSidebar(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isCollapsed: !prevState.isCollapsed,
    }));
  }
  
  render() {
    const { isCollapsed } = this.state;
    return (
      <aside className={`bg-black dk aside hidden-print ${isCollapsed ? 'nav-xs' : ''}`} id="nav">
        <section className="vbox">
          <section className="w-f-md scrollable">
        <div className="navbar-header aside bg-info nav-xs">
          <a className="btn btn-link visible-xs">
            <i className="icon-list"></i>
          </a>
          <a href="#" className="navbar-brand text-lt">
            <i className="icon-microphone"></i>
            <img src="/static/images/logo.png" alt="." className="hide" />
            <span className="hidden-nav-xs m-l-sm">Musik-Huysik</span>
          </a>
          <a className="btn btn-link visible-xs">
            <i className="icon-settings"></i>
          </a>
        </div>
            <div className="slimScrollDiv" >
              <div className="slim-scroll" data-height="auto" data-disable-fade-out="true" data-distance="0" data-size="10px" data-railopacity="0.2">
                <nav className="nav-primary hidden-xs">
                  <ul className="nav bg clearfix"> 
                    <li className="hidden-nav-xs padder m-t m-b-sm text-xs text-muted"> Discover </li>
                    <AsideLink 
                      link={'/test'} 
                      text={'Блог'}
                      iconName={'settings'} 
                      iconType={'primary'} 
                      isBold 
                    />
                    <AsideLink 
                      link={'/new'} 
                      text={'Лента'}
                      iconName={'disc'} 
                      iconType={'success'} 
                      isBold
                    />
                    <AsideLink 
                      link={'/profile'} 
                      text={'Музыканты'}
                      iconName={'music-tone-alt'} 
                      iconType={'info'} 
                      isBold
                    />
                    <AsideLink 
                      link={'/events'} 
                      text={'Сцены'}
                      iconName={'drawer'} 
                      iconType={'primary-lter'} 
                      isBold
                      badgeCount={6}
                      badgeColor={'primary'}
                    />
                    <AsideLink 
                      link={'/listen'} 
                      text={'Плейлист'}
                      iconName={'list'} 
                      iconType={'info-dker'} 
                      isBold
                    />
                    <AsideLink 
                      link={'/video'} 
                      text={'Видео'}
                      iconName={'social-youtube'} 
                      iconType={'primary'} 
                      isBold
                    />
                    <li className="m-b hidden-nav-xs"></li>
                  </ul> 
                  <ul className="nav text-sm"> 
                    <li className="hidden-nav-xs padder m-t m-b-sm text-xs text-muted">
                      <span className="pull-right">
                        <a href="#">
                          <i className="icon-plus i-lg"></i>
                        </a>
                      </span>
                      Playlist
                    </li>
                    <AsideLink 
                      link={'/hip-hop'} 
                      text={'Студии'}
                      iconName={'music-tone'}
                    />
                  </ul>
                </nav>
              </div>
              <div className="slimScrollBar"></div>
              <div className="slimScrollRail" ></div>
            </div> 
          </section>
          <footer className="footer hidden-xs no-padder text-center-nav-xs">
            <div className="dropdown dropup wrapper-sm clearfix" onClick={this.toggleSidebar}>
              <a href="#" className="text-muted">
                <i className={`fa fa-indent text${isCollapsed ? '' : '-active'}`}></i>
                <i className={`fa fa-dedent text${isCollapsed ? '-active' : ''}`}></i>
              </a>
            </div>
          </footer>
        </section>
      </aside>
    );
  }
}

export default Sidebar;