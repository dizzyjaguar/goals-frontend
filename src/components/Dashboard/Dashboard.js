import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserByIdRedux } from '../../actions/authActions';
import { useProfile } from '../../hooks/authHooks/profileHooks';

const Dashboard = () => {
  const { user, starredGoals, starredGoalNodes, completedGoals, completedGoalNodes } = useProfile();
  const dispatch = useDispatch();
  const [menuItems, setMenuItems] = useState([starredGoals, completedGoals ])
  const [menuCursor, setMenuCursor] = useState(0)

  
  useEffect(() => {
    dispatch(getUserByIdRedux(user))
  }, [])

  
  
  

  return (
      <>
        <h1>Greetings {user.username}</h1>
        <div className='DashboardGoals'>
          {menuCursor === 0 ? <> <h1>STARRED GOALS</h1> <br/> {starredGoalNodes} </>
          : menuCursor === 1 ? <> <h1>COMPLETED GOALS</h1> <br/> {completedGoalNodes} </>
          : <></>
          }
          <br/>
          <button onClick={() => setMenuCursor(0)}>{'<'}</button>
          <button onClick={() => setMenuCursor(1)}>{'>'}</button>
          
        </div>
        
      </>
  )
}

export default Dashboard;