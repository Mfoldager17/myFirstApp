import Image from 'next/image'
import Styles from './page.module.css'
import Link from "next/link"

export default function Home() {
  return (
    < div className={Styles.center} >
      <div className={Styles.h1}>
        <h1>Login</h1>
      </div>
      <label className={Styles.loginlabel}> Username</label>
      <input className={Styles.login} type="username" />
      <label className={Styles.loginlabel}>Password</label>
      <input className={Styles.login} type="password" />
      <input className={Styles.btn} type="button" value="Login" />
    </div >
  )
}
