
import style from './style.module.scss'

export default function BlogPage() {
    return (<div style={{
        margin: 200
    }}>
        <h1 className={`animate__animated animate__lightSpeedInLeft ${style.title}`}>An animated element</h1>

    </div>)
}