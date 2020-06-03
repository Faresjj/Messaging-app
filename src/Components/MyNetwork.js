import React, { Component } from 'react';
import { dummyUsers } from "./Users";

class MyNetwork extends Component {
   constructor(props) {
        super(props); 
        let currentUser;
        const currentTalkjsUser = localStorage.getItem('currentTalkjsUser');
        if (currentTalkjsUser) {
            currentUser = JSON.parse(currentTalkjsUser)
        }
        this.state = {
            currentUser
        }
      }

    render() {
      const { currentUser } = this.state;
        return (
            <div className="users">
            <div className="current-user-container">
                 {currentUser &&
                     <div>
                         <picture className="current-user-picture">
                             <img alt={currentUser.name} src={currentUser.photoUrl} />
                         </picture>
                         <div className="current-user-info">
                             <h3>{currentUser.name}</h3>
                             <p>{currentUser.description}</p>
                         </div>
                     </div>
                 }
             </div>
                <div className="users-container"> 
                    <ul>
                        { dummyUsers.map(user => 
                          <li key={user.id} className="user">
                              <picture className="user-picture">
                                  <img src={user.photoUrl} alt={`${user.name}`} />
                              </picture>
                              <div className="user-info-container">
                                  <div className="user-info">
                                      <h4>{user.name}</h4>
                                      <p>{user.info}</p>
                                  </div>
                                  <div className="user-action">
                                      <button >Message</button>
                                  </div>
                              </div>
                          </li>
                        )}
                    </ul>
                </div>
           </div>
        )
    }
}
    export default MyNetwork;