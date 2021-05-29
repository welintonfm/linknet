import Button from '../components/button'
import SocialIcon from '../components/social-icon'

function Home(){
    return (
        <div style={teionStyle.body}>

            <div style={teionStyle.container}>
                <div style={teionStyle.content}>
                    <div style={teionStyle.innerContent}>
                    <a href="https://teiongames.com"><img src='/img/horizontal branco.png'/></a>
                        <Button style='teion' title='Jogue o Zero/Zero' link={process.env.TEION_ZEROZERO}/>
                        <Button style='teion' title='Acesse o Blog da Teion!' link={process.env.TEION_BLOG}/>
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

        </div>            
    ) 
}


const teionStyle = {
    body:{
        backgroundImage: 'linear-gradient(135deg, rgba(17,18,16,1) 0%, rgba(37,40,80,1) 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        padding: '20px 0'
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


export default Home