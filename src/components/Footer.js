import * as React from 'react'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import RestoreIcon from '@mui/icons-material/Restore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LocationOnIcon from '@mui/icons-material/LocationOn'

export default function Footer() {
    const [value, setValue] = React.useState(0)
    const styled = {
        background: '#e0dede',
        bottom: '0px',
        width: '100%',
        // height:'100%'
    }
    return <div style={styled}>footer</div>
}
