import {Button} from './styles'

function DefaultButton ({children, ...props }){

    console.log("info", children)
    console.log("props", props)
    return(
        <Button {...props}>{children}</Button>
    )
}

export default DefaultButton