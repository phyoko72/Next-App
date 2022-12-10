import Head from 'next/head'
import Image from 'next/image'
import Header from '../comps/Header'
import styles from '../styles/Home.module.css'
import About from './about'
import MyStyle from '../styles/MyStyle.module.css'

export default function Home() {
  return (
    <>
      <h1 className={MyStyle.header}>Next App</h1>
    </>
  )
}
