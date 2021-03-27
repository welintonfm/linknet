import Button from '../../components/Teion/teion-button'
import Image from 'next/image'

function Home(){
    return (
        <div className='container' style={style.container}>
            <div className='personal' style={style.personal}>
                <img src='/img/pics/uelito.jpg'  style={style.profilePic} />
                <div className='title' style={style.title}>
                    <h1>Welinton Faria</h1>
                    <p>Olá! Sou designer e desenvolvedor, apaixonado por criar coisas novas.<br /><br />Confira meus projetos abaixo!</p>
                </div>
            </div>
        </div>
    )
}

const style = {
    container: {
        padding: '0',
        margin: '0',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    personal: {
        display: 'flex',
        backgroundColor: '#191919',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '254px'
    },
    title: {
        display: 'flex',
        flexDirection: 'column'
    },
    profilePic: {
        width: '104px',
        height: '104px',
        borderRadius: '50%',
        margin: '0 5vw',
        border: '2px solid white'
    }
}

export default Home