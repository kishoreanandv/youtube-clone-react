import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/constants'

function SideBar({selectedCategory,setselectedCategory}) {
  return (
    <Stack
    
      direction='row'
      sx={{
        overflowY: 'auto',
        height: {
          sx: 'auto',
          md:'95%'
        },
        flexDirection: {
          md:'column'
        }
    }}>

      {categories.map((item) => (
        <button
          className='category-btn'
          onClick={()=>setselectedCategory(item.name)}
          style={{
            background: item.name === selectedCategory && '#FC1503',
            color:'white'
          }}
          key={item.name}
        >
          <span
            style={{
              color: item.name === selectedCategory ? 'white' : 'red',
              marginRight:'15px'
          }}>
            {item.icon}
          </span>
          <span
            style={{
            opacity:item.name===selectedCategory?"1":'0.8'
          }}>
            {item.name}
          </span>
        </button>
      ))}
      
  </Stack>
  )
}

export default SideBar