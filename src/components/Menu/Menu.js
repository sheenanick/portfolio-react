import React, { Component } from 'react';
import close from '../../img/icons/close.png';
import { MENU } from '../../util/constants';
import './Menu.css';

export default class Menu extends Component {
  onHomeClick = () => {
    const { scrollTo, showMenu, toggleMenu } = this.props;
    scrollTo('Home');
    if (showMenu) toggleMenu();
  }

  selectMenu = (id) => {
    const { scrollTo, toggleMenu } = this.props;
    scrollTo(id);
    toggleMenu();
  }

  renderMenuItems = () => {
    const { showMenu, active } = this.props;
    return (
      Object.keys(MENU).map((key) => {
        const item = MENU[key];
        const { id, label } = item;
        return (
          <div className={`menu-item-wrapper ${showMenu ? 'show-item' : ''}`} key={key}>
            <h4 className={`menu-item ${active === id ? 'underline' : ''}`}
              onClick={() => this.selectMenu(id)}>
              {label.toUpperCase()}
            </h4>
          </div>
        );
      })
    );
  }

  render() {
    const { showMenu, toggleMenu } = this.props;
    return (
      <div className='Menu'>
        {
          showMenu ?
            <img className='menu-icon' src={close} alt='close icon' onClick={toggleMenu} />
          :
            null
        }
        <div className={`mobile-menu ${showMenu ? 'show-menu' : ''}`}>
          {this.renderMenuItems()}
        </div>
      </div>
    );
  }
}
