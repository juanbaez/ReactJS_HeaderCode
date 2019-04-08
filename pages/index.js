import React, { Component } from 'react'
import DocumentHead from '../src/components/documentHead'
import { Layout } from '../src/components/Layout'
import Providencia from '../src/components/providenciasTabs'
class Index extends Component {
  render () {
    return (
      <div>
        <DocumentHead title='AEM' />
        <Layout>
          <Providencia />
        </Layout>

      </div>
    )
  }
}

export default Index
