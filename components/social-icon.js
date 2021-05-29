import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookF, faInstagram, faLinkedinIn, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons'



const SocialIcon = (props) => {
    let type;
    let style;

    switch(props.type){
        case 'facebook':
            type = faFacebookF;
            break;
        case 'instagram':
            type = faInstagram;
            break;
        case 'linkedin':
            type = faLinkedinIn;
            break;
        case 'youtube':
            type = faYoutube;
            break;
        case 'github':
            type = faGithub;
            break;
        default:
            console.error('SocialIcon: the type is invalid.')
    }

    switch(props.style){
        case 'personal':
            style = personalStyle;
            break;
        case 'teion':
            style  = teionStyle;
            break;
        case 'otakusho':
            style =  otakushoStyle;
            break;
        default:
            console.error('SocialIcon: the style is invalid.')
    }

    return (
        <li style={style}>
            <a href={props.link}>
                <FontAwesomeIcon icon={type} />
            </a>
        </li>
    ) 
}

export default SocialIcon

const personalStyle = {
    fontSize: '30px',
    color: 'white',
    minWidth: '48px',
    minHeight: '48px',
    width: '48px',
    height: '48px',
    border: '2px solid white',
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginRight: '20px',
    lineHeight: '20px',
    cursor: 'pointer'    
}

const teionStyle = {
    fontSize: '30px',
    color: 'white',
    minWidth: '48px',
    minHeight: '48px',
    width: '48px',
    height: '48px',
    border: '2px solid white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginRight: '20px',
    lineHeight: '20px',
    backgroundColor: '#252850',
    cursor: 'pointer'     
}

const otakushoStyle = {
    fontSize: '30px',
    color: 'white',
    minWidth: '48px',
    minHeight: '48px',
    width: '48px',
    height: '48px',
    border: '2px solid white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4D96FF',
    boxShadow: '1px 1px 0px 2px rgba(0,0,0,0.6)',
    marginRight: '20px',
    lineHeight: '20px',
    cursor: 'pointer'
}