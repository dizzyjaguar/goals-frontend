import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserByIdRedux } from '../../actions/authActions';
import { setCurrentGoals } from '../../actions/goalActions';
import { useProfile } from '../../hooks/authHooks/profileHooks';

const Dashboard = () => {
  const { user, starredGoals, starredGoalNodes, completedGoals, completedGoalNodes, currentGoals, currentGoalNodes } = useProfile();
  const dispatch = useDispatch();
  const [menuItems, setMenuItems] = useState([starredGoals, completedGoals ])
  const [menuCursor, setMenuCursor] = useState(0)

  
  useEffect(() => {
    dispatch(getUserByIdRedux(user))
  }, [])

  // for some reason the currentGoal nodes arent updating when going just from the main goals page to the dashboard, need to inspect why, sometimes it looks like its working too

  return (
      <>
        <h1>Greetings {user.username}</h1>
        <div className='DashboardGoals'>
          {/* add in all starred goals aswell */}
          {menuCursor === 0 ? <> <h1>CURRENT GOALS</h1> <br/> {currentGoalNodes} </>
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