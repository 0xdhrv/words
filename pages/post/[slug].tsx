import { NotionRenderer, BlockMapType } from 'react-notion'
import { Heading, Container, useThemeUI } from 'theme-ui'
import { NextSeo } from 'next-seo'
import Head from 'next/head'

import { getAllPosts, Post } from '..'
import Layout from '../../components/layout'

export async function getStaticProps({ params: { slug } }: { params: { slug: string } }) {
  const posts = await getAllPosts()
  const post = posts.find((t) => t.slug === slug)

  const blocks = await fetch(`https://get.dhrvs.workers.dev//v1/page/${post!.id}`).then((res) =>
    res.json(),
  )

  return {
    props: {
      blocks,
      post,
    },
    revalidate: 1,
  }
}

const BlogPost: React.FC<{ post: Post; blocks: BlockMapType }> = ({ post, blocks }) => {
  const { theme } = useThemeUI()
  if (!post) return null

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content={theme.colors?.primary} />
      </Head>
      <Layout>
        <NextSeo title={post.title} description={post.preview} />
        <Heading as="h3">{post.title}</Heading>
        <Container>
          <NotionRenderer blockMap={blocks} />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const table = await getAllPosts()
  return {
    paths: table.map((row) => `/post/${row.slug}`),
    fallback: true,
  }
}

export default BlogPost
