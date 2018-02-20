import React, { Component } from 'react';
import Modal from 'react-modal';

import CalendarRow from './CalendarRow';
import './App.css';
import panorama from './images/panorama.jpg';
import raptorjesus from './images/raptorjesus.png';
import firstfriend from './images/first-friend.jpg';
import horses from './images/horses.jpg';
import road from './images/road.jpg';
import horseperson from './images/horse-person.jpg';
import beachpower from './images/beach-power.jpg';
import hotshot from './images/hot-shot.jpg';
import adameve from './images/adam-and-eve.jpg';
import beautiful from './images/beautiful.jpg';
import rapper from './images/dating-rapper.jpg';
import bryce from './images/we-went-here.jpg';
import whiskey from './images/whiskey-circles.JPG';
import goodtimes from './images/good-times.jpg';
import pizza from './images/pizza-food.jpg';
import mkt from './images/makeout.jpg';
import serious from './images/serious.jpg';
import grandma from './images/grandma.jpg';

const firstCalendarItems = [
  {
    title: 'Mon',
    subtitle: '29',
    source: firstfriend,
    caption: 'Our first Cuban friend!',
    enabled: true,
  }, {
    title: 'Tue',
    subtitle: '30',
    source: adameve,
    caption: 'Ben & Colleen: a modern-day Adam and Eve story',
    enabled: true,
  }, {
    title: 'Wed',
    subtitle: '31',
    source: rapper,
    caption: 'How often do people ask you what its like to date a rapper?',
    enabled: true,
  }, {
    title: 'Thu',
    subtitle: '1',
    source: beachpower,
    caption: 'Babz got the powa!',
    enabled: true,
  }, {
    title: 'Fri',
    subtitle: '2',
    source: bryce,
    caption: 'This was a special place',
    enabled: true,
  }
];

const secondCalendarItems = [
  {
    title: 'Mon',
    subtitle: '5',
    source: beautiful,
    caption: 'my love you are BEAUTIFUL',
    enabled: true,
  }, {
    title: 'Tue',
    subtitle: '6',
    source: horseperson,
    caption: 'Nearly hunted to extinction, the horseperson is an elusive sight in the Cuban wilderness',
    enabled: true,
  }, {
    title: 'Wed',
    subtitle: '7',
    source: whiskey,
    caption: 'Run until you cant, then sit down and get drunk',
    enabled: true,
  }, {
    title: 'Thu',
    subtitle: '8',
    source: road,
    caption: '2018: lets spend more time on the road',
    enabled: true,
  }, {
    title: 'Fri',
    subtitle: '9',
    source: hotshot,
    caption: 'Baby you so cool',
    enabled: true,
  }
];

const thirdCalendarItems = [
  {
    title: 'Mon',
    subtitle: '12',
    source: pizza,
    caption: 'We sure know how to cook',
    enabled: true,
  }, {
    title: 'Tue',
    subtitle: '13',
    source: horses,
    caption: 'MOJITOOOOO!!!!',
    enabled: true,
  }, {
    title: 'Wed',
    subtitle: '14',
    source: goodtimes,
    caption: 'May you always be my valentine',
    enabled: true,
  }, {
    title: 'Thu',
    subtitle: '15',
    source: mkt,
    caption: 'Multnomah makeout sesh, January 1st 2017',
    enabled: true,
  }, {
    title: 'Fri',
    subtitle: '16',
    source: serious,
    caption: 'its the weekend babazoo! lets get seriouuuus!',
    enabled: true,
  }
];

const fourthCalendarItems = [
  {
    title: 'Mon',
    subtitle: '19',
    source: grandma,
    caption: 'I cant wait to see grandma!',
    enabled: true,
  }, {
    title: 'Tue',
    subtitle: '20',
    source: firstfriend,
    enabled: false,
  }, {
    title: 'Wed',
    subtitle: '21',
    source: firstfriend,
    enabled: false,
  }, {
    title: 'Thu',
    subtitle: '22',
    source: firstfriend,
    enabled: false,
  }, {
    title: 'Fri',
    subtitle: '23',
    source: firstfriend,
    enabled: false,
  }
];

class App extends Component {
  state = {
    activeEntry: null,
    modalOpen: false,
  };

  openModal = (entry) => {
    this.setState({
      modalOpen: true,
      activeEntry: entry,
    })
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
      activeEntry: null,
    })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={panorama} className="Header-image" alt="logo" />
          <h1 className="App-title">Happy V-day, babazoobazoo!</h1>
        </header>
        <div className="Calendar-container">
          <h1>i made you an advent calendar too ;)</h1>
          <img src={raptorjesus} />
          <CalendarRow
            onOpenModal={this.openModal}
            entries={firstCalendarItems}
          />
          <CalendarRow
            onOpenModal={this.openModal}
            entries={secondCalendarItems}
          />
          <CalendarRow
            onOpenModal={this.openModal}
            entries={thirdCalendarItems}
          />
          <CalendarRow
            onOpenModal={this.openModal}
            entries={fourthCalendarItems}
          />
        </div>
        <Modal isOpen={this.state.modalOpen} style={{background: '#fcfaff'}} >
          <div style={{ cursor: 'pointer', float: 'right' }} onClick={this.closeModal}>X</div>
          { this.state.activeEntry && <div style={{ textAlign: 'center' }}>
            <img style={{ maxHeight: '500px' }} src={this.state.activeEntry.source} />
            <h3>{ this.state.activeEntry.caption }</h3>
          </div>}
        </Modal>
      </div>
    );
  }
}

export default App;
