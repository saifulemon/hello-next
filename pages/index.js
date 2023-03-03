import Link from "next/link";
import Head from "next/head";
import Layout from "./components/Layout"

const Index = () => (
    <Layout mainTitle="My Home page built with Next Js" footer={`this is built by Saiful`}>
        <Head>
            <title>Home Page</title>
        </Head>
        <h2>Hello from Next JS</h2>
        <Link href="/about">About Page</Link>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
    </Layout>
)

export default Index;