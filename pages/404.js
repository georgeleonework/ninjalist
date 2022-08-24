import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next' //method were going to use to redirect ro

const NotFound = () => {
    const router = useRouter(); //initializes the router method for us to use

    useEffect(() => {  //were waiting 3000 miliseconds (second param) before we fire the irst param function
        setTimeout(() => {
            router.push('/'); //redirects them to the homepage
        }, 3000)
    }, [])

    return ( 
        <div className="not-found">
            <h1>Ooooops...</h1>
            <h2>That page cannot be found</h2>
            <p> Go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
     );
}
 
export default NotFound;