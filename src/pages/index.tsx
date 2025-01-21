import Head from 'next/head'
import { Layout } from "components"

const Home: React.FC = () => {
  return (
    <div>
      <h1>
        <title>Vendas App</title>
        <link rel="icon" href="/favicon.ico" />
      </h1>

      <Layout />
    </div>
  )

}

export default Home;