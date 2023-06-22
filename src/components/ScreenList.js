import React from 'react'
import Screen from './Screen';
import { projects } from '../projects';

const ScreenList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((user) => {
            return (
              <Screen
                key={user.id}
                name={user.name}
                link={user.link}
              />
            );
        })}
    </div>
  )
}

export default ScreenList