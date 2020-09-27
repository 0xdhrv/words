import Link from 'next/link'
import { Heading, Box, useThemeUI } from 'theme-ui'
import { NextSeo } from 'next-seo'
import Head from 'next/head'

import Layout from '../components/layout'

const NOTION_BLOG_ID = process.env.NOTION_BLOG_ID || '83395aedaf234d579198d6e8eb0ae094'

export type Post = { id: string; slug: string; title: string; date: string; preview: string }

export const getAllPosts = async (): Promise<Post[]> => {
  return await fetch(`https://get.dhrvs.workers.dev//v1/table/${NOTION_BLOG_ID}`).then((res) =>
    res.json(),
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()
  return {
    props: {
      posts,
    },
    revalidate: 1,
  }
}

function HomePage({ posts }: { posts: Post[] }) {
  const { theme } = useThemeUI()
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
      <NextSeo title="Words | Dhruv Suthar" description="Words Blog" />
      <Layout>
        <Box>
          {posts.map((post) => (
            <Link href="/post/[slug]" as={`/post/${post.slug}`} key={post.slug}>
              <a>
                <Heading p={2}>{post.title}</Heading>
              </a>
            </Link>
          ))}
        </Box>
      </Layout>
    </>
  )
}

export default HomePage
