import { signIn } from 'next-auth/client'
import styles from "./access-denied.module.css"

export default function AccessDenied () {
  return (
    <>
      <h1 className='font-black'> Access Denied</h1>
      <p className={styles.link}>
        <a href="/api/auth/signin"
           onClick={(e) => {
           e.preventDefault()
           signIn()
        }}>You must be signed in to view this page</a>
      </p>
    </>
  )
}
