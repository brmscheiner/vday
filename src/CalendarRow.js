import React, { Component } from 'react';

class CalendarRow extends Component {
  state = {
    rejected: null
  };

  render() {
    const calendarEntries = this.props.entries.map(entry => (
      <div
        className="Calendar-entry"
        key={entry.caption}
        onClick={() => {
          if (entry.enabled) {
            this.props.onOpenModal(entry);
          } else {
            this.setState({ rejected: entry })
          }
        }}
      >
        <span className="Calendar-entry-title">{ entry.title }</span><br />
        <span className="Calendar-entry-subtitle">{ entry.subtitle }</span><br /><br />
        { this.state.rejected === entry && <span style={{
          textAlign: 'center',
          color: '#4f1d1d'
        }}>No! Be patient babz0rz!</span>}
      </div>
    ));
    return (
      <div className="Calendar-row">
        { calendarEntries }
      </div>
    );
  }
}

export default CalendarRow;