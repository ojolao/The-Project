import React from 'react';
import ReactDOM from 'react-dom';
import TripEntry from './TripEntry.jsx';

class Friends extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>Friends</h1>
        <input
          placeholder='Add friend'
          name='name' type='text'

          id='input-name'
          className='flex-column-name'
        />
        <a
          className='btn-circle'>
        </a>

      </div>
    )
  }
}

export default Friends;

/*
onClick={this.props.addMember}
value={itemName}
onChange= {onInputChange}




<div className='page-container'>
  <h1>Most Recent Trips</h1>
  <div className='trip-summary'>{this.props.data.recent.map((item,index) => {
    return (<p key={index} >{item.name}</p>)
  })}
  </div>
</div>
*/
