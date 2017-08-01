import React, { Component } from 'react';
import { fetchStats } from '../actions';
import { connect } from 'react-redux';

class Stats extends Component {

  componentDidMount() {
    this.props.fetchStats();
  }

  renderStats() {
    const { stats } = this.props;

    return stats.map(function(stat) {
      const className = stat._id;
      return (
        <li key={className} className='row'>
          <span className='col-sm-6'>{className.toUpperCase()}: </span>
          <strong className='col-sm-3'>{stat.count}</strong>
        </li>
      );
    });
  }

  render() {
    if (!this.props.stats) {
      return (<div>Loading ...</div>);
    }
    else if (this.props.stats.length < 1){
      return <div></div>;
    }

    return (
      <div>
        <div>Records today: </div>
        <ul className="list-group">
          { this.renderStats() }
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ stats }) {
  return { stats };
}

export default connect(mapStateToProps, { fetchStats })(Stats);
