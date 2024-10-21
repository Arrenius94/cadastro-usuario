// import PropTypes from "prop-types"
import PropTypes from "prop-types"
import { Title } from "./styles"

function DefaultTitle({children, title}) {
   
   return (
     <Title title={title}>{children}</Title>
   )
   
}

DefaultTitle.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string
}

export default DefaultTitle