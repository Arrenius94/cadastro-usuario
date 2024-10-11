import PropTypes from 'prop-types'
import {Button} from './styles'

function DefaultButton ({children, ...props }){

    console.log("info", children)
    console.log("props", props)
    return(
        <Button {...props}>{children}</Button>
    )
}

DefaultButton.propTypes = {
    children: PropTypes.node.isRequired
}

export default DefaultButton