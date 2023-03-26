import React from 'react'
import { ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material'

function ListItemComp({ text, icon }) {
  return (
    <div>
      <ListItem className='list-item' key={text} style={{ padding: '0px 10px', userSelect: 'none' }}>
        <ListItemButton style={{ backgroundColor: "transparent" }} disableRipple>
          <ListItemIcon>
            {icon}
          </ListItemIcon>
          <ListItemText primary={text} style={{ userSelect: 'none', fontSize: '20px' }} />
        </ListItemButton>
      </ListItem>
    </div>
  )
}
export default ListItemComp