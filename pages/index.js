import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo assumenda molestiae sed quos unde obcaecati hic corrupti ullam perferendis nisi optio libero, minima, quae mollitia rerum tenetur perspiciatis, recusandae molestias.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo assumenda molestiae sed quos unde obcaecati hic corrupti ullam perferendis nisi optio libero, minima, quae mollitia rerum tenetur perspiciatis, recusandae molestias.</p>
      <Link href="/ninjas">
        <a> See Ninja Listing</a>
      </Link>
    </div>
  )
}
