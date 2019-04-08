import Head from 'next/head'

const DocumentHead = (props) => (
  <Head>
    <title>{props.title}</title>
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
    <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
  </Head>
)

export default DocumentHead
