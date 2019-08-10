import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import css from "../styles.css"
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

Router.onRouteChangeStart = url => {
    console.log("star loading", url)
    NProgress.start()
}
Router.onRouteChangeComplete = () => {
    NProgress.done()
}

Router.onRouteChangeError = () => {
    NProgress.done()
}
export default ({ children, title }) => (
    <div>
        <Head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>ConnectNib</title>
            <meta name="description" content="ConnectNib" />
            <meta name="keywords" content="ConnectNib" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" rel="stylesheet" type="text/css" />
            <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap" rel="stylesheet" />
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
            />
            {/* <script
                src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
                crossorigin
            /> */}

            <script
                src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                crossorigin
            />
        </Head>
        <header className={css.main}>
            <div className="container">
                <Navbar>
                    <Link href="/"><img src="/static/logo.png" className={css.logo} /></Link>
                    <Nav className="ml-auto">
                        <Link href="/home">About us</Link>
                        <Link href="/categories">Categories</Link>
                        <Link href="/blog">Blog</Link>
                    </Nav>
                    <div className={css.btnholder}>
                        <Button variant="success" className={css.btnsuccess}>Success</Button>
                    </div>
                </Navbar>
            </div>
            {/* <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/aboutus">
                <a>About Us</a>
            </Link>
            <Link href="/">
                <a>Hire me</a>
            </Link> */}
        </header>
        {children}
        <footer>
            <div className="container">
                <div className={css.footerLinks}>
                    <ul>
                        <li><Link href="/home">About us</Link></li>
                        <li><Link href="/categories">Categories</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                    </ul>

                </div>
            </div>
            {/* <p>Copy right</p> */}
        </footer>
    </div>
)