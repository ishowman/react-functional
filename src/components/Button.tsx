import React, { ReactNode, useContext } from 'react'
import {ThemeContext} from '../contexts/theme.context'

interface ButtonProps {
    // theme: string,
    children: ReactNode
}

export function Button(props: ButtonProps) {
    const theme = useContext(ThemeContext)
    
    const { children} = props
    return (
        // <ThemeContext.Consumer>
        //     {theme => (
        //             <button style={
        //                 {
        //                     color: theme.foreground,
        //                     backgroundColor: theme.background
        //                 }
        //             }>{children}</button>
        //         )
        //     }
        // </ThemeContext.Consumer>

        // 这种简洁的写法，需要搭配 useContext
        <button style={
            {
                color: theme.foreground,
                backgroundColor: theme.background
            }
        }>{children}</button>
    )        
}