const Button = (props) => {
    let style;

    switch(props.style){
        case 'teion':
            style  = teionStyle;
            break;
        case 'otakusho':
            style =  otakushoStyle;
            break;
        default:
            console.error('Button: the style is invalid.')
    }

    return (
        <a href={props.link}>
            <button style={style}>{props.title}</button>
        </a>
    ) 
}

export default Button

const teionStyle = {
    height: '50px',
    width: '250px',
    backgroundColor: '#252850',
    border: '2px solid white',
    borderRadius: '24px',
    fontSize: '18px',
    fontWeight: '700',
    color: 'white',
    margin: '15px 0',
    cursor: 'pointer'
}

const otakushoStyle = {
    height: '50px',
    width: '250px',
    backgroundColor: '#4D96FF',
    border: '2px solid white',
    boxShadow: '1px 1px 0px 2px rgba(0,0,0,0.6)',
    borderRadius: '24px',
    fontSize: '18px',
    fontWeight: '700',
    color: 'white',
    margin: '10px 0',
    cursor: 'pointer'
}