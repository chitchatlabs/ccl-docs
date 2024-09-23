import React from 'react';
import { Redirect } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  // Redirect to the docs intro page using an absolute path
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation for ChitChatLabs">
      <Redirect to={`${siteConfig.baseUrl}introduction`} />
    </Layout>
  );
}