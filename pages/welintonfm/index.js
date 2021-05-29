import Button from '../../components/button'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import SocialIcon from '../../components/social-icon'


function Home(){
    return (
        <div>
            <div className='container' style={personalStyle.container}>
                <div className='personal' style={personalStyle.personal}>
                    <img src='/img/pics/uelito.jpg' style={personalStyle.profilePic} />
                    <div className='title' style={personalStyle.title}>
                        <h1>Welinton Faria</h1>
                        <p>Olá! Sou designer e desenvolvedor, apaixonado por criar coisas novas.<br /><br />Confira meus projetos abaixo!</p>
                    </div>
                </div>
                <div className='homeIcons' style={personalStyle.homeIcons}>
                    <ul>
                        <SocialIcon link={process.env.WELINTON_FB} style='personal' type='facebook'/>
                        <SocialIcon link={process.env.WELINTON_IG} style='personal' type='instagram'/>
                        <SocialIcon link={process.env.WELINTON_IN} style='personal' type='linkedin'/>
                        <SocialIcon link={process.env.WELINTON_GH} style='personal' type='github'/>
                    </ul>
                </div>
            </div>

            <div style={teionStyle.container}>
                <div style={teionStyle.content}>
                    <img src='/img/uelito.png' />
                    <div style={teionStyle.innerContent}>
                        <a href="https://teiongames.com"><img src='/img/horizontal branco.png'/></a>
                        <Button style='teion' title='Confira o Site da Teion!' link={process.env.TEION_WEB}/>
                        <ul>
                            <SocialIcon link={process.env.TEION_FB} style='teion' type='facebook'/>
                            <SocialIcon link={process.env.TEION_IG} style='teion' type='instagram'/>
                            <SocialIcon link={process.env.TEION_YT} style='teion' type='youtube'/>
                        </ul>
                    </div>
                </div>
                <p><strong><a href="https://teiongames.com">Teion Games</a> é uma desenvolvedora de jogos indie.</strong></p>
            </div>

            <div style={otakushoStyle.container}>
                <div style={otakushoStyle.content}>
                    <div style={otakushoStyle.innerContent}>
                        <a href="https://otakusho.com"><img src='/img/Logo_1.png' /></a>
                        <Button style='otakusho' title='Confira o Site do Otakushô!' link={process.env.OTAKUSHO_WEB}/>
                        <ul>
                            <SocialIcon link={process.env.OTAKUSHO_FB} style='otakusho' type='facebook'/>
                            <SocialIcon link={process.env.OTAKUSHO_IG} style='otakusho' type='instagram'/>
                            <SocialIcon link={process.env.OTAKUSHO_YT} style='otakusho' type='youtube'/>
                        </ul>
                    </div>
                    <img src='/img/Sukuna.png' style={otakushoStyle.sukuna} />
                </div>
                <p style={otakushoStyle.legenda}><strong><a href="https://otakusho.com">Otakushô</a> é um aplicativo para organização de Mangás.</strong></p>
            </div>

        </div>        
    )
}

const personalStyle = {
    container: {
        padding: '0',
        margin: '0',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#191919'
    },
    personal: {
        display: 'flex',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: '20px 0 10px 0', 
        maxWidth: '400px'
    },
    title: {
        display: 'flex',
        flexDirection: 'column'
    },
    profilePic: {
        width: '104px',
        height: '104px',
        borderRadius: '50%',
        margin: '0 20px',
        border: '2px solid white'
    },
    homeIcons: {
        marginBottom: '15px'
    }
}

const teionStyle = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        padding: '20px 0',
        backgroundImage: 'linear-gradient(135deg, rgba(17,18,16,1) 0%, rgba(37,40,80,1) 100%)'
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

const otakushoStyle = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        backgroundImage: `url('/img/bg.png')`,
        padding: '20px 0'
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '30px', 
        maxWidth: '500px'
    },
    innerContent: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
        zIndex: '1'
    },
    sukuna: {
        position: 'absolute',
        right: '0px',
        zIndex: '0'
    },
    legenda: {
        alignSelf: 'center'
    }
}

export default Home