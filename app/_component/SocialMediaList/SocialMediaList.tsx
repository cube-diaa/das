import youTubeIcon from '@/app/assets/socialMediaIcon/youtube.svg'
import faceBookIcon from '@/app/assets/socialMediaIcon/facebook.svg'
import instagramIcon from '@/app/assets/socialMediaIcon/instagram.svg'
import twitterIcon from '@/app/assets/socialMediaIcon/twitter.svg'
import Image from "next/image";
import {Divider} from "antd";
import style from './style.module.scss'

export default function SocialMediaList() {
    return (<div className={style.container}>
        <Image className={style.icon} src={twitterIcon} alt={'twitter'}/>
        <Divider className={style.divider} type="vertical"/>
        <Image className={style.icon} src={instagramIcon} alt={'instagram'}/>
        <Divider className={style.divider} type="vertical"/>
        <Image className={style.icon} src={faceBookIcon} alt={'faceBook'}/>
        <Divider className={style.divider} type="vertical"/>
        <Image className={style.icon} src={youTubeIcon} alt={'youTube'}/>
    </div>)
}