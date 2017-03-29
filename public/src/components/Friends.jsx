import React from 'react';
import ReactDOM from 'react-dom';
import TripEntry from './TripEntry.jsx';
import FriendEntry from './FriendEntry.jsx';

class Friends extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let friends = ['Kai', 'Tayo', 'Duy', 'Gary', 'Whitney', 'Eugene']
    return(
      <div>
        <div>
          <h1>Friends</h1>
          <input
            placeholder='Add friend by e-mail'
            name='name' type='text'

            id='input-name'
            className='flex-column-name'
          />
          <a
            className='btn-circle'>
          </a>

        </div>
        <div>
          <br></br>
          Sorry we could not find your friend...
          <br></br>
          <br></br>
          <br></br>
        </div>
        {friends.map(friend => <FriendEntry friend={friend}/>)}
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
