import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = () =>{
        
        console.log('Click')
    }
    return (
        <header className='header'>
           <h1>{title}</h1>  
           <Button text='Add' color='steelblue' onClick={onClick}/>
        </header>
    )
}
Header.defaultProps = {
    title: 'Logan Paul City'
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
// CSS IN JS
const headingStyle = {
    color:'purple',backgroundColor:'pink'
}

export default Header
