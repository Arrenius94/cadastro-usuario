import PropTypes from 'prop-types'
import {Button} from './styles'

function DefaultButton ({children, theme, ...props }){

    console.log("info", children)
    console.log("props", props)
    return(
        <Button {...props} theme={theme}>{children}</Button>
    )
}

DefaultButton.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.string,
}

export default DefaultButton