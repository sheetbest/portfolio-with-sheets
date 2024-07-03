import Head from 'next/head'
import { Heading, Link, Text, Box, Flex } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'

export async function getServerSideProps() {
  const res = await fetch(`https://sheet.best/api/sheets/cd5a43a2-f408-4462-899e-f0bc83cbc86a`);
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Developer portfolio</title>
        <meta name="description" content="developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Heading size="2xl" mb={6}>
          Peter <Link href="https://nextjs.org" color="blue.500">Parker</Link>
        </Heading>

        <Text px="10%" textAlign="center">
          Hi There! Welcome to my little place on the internet. Here, you will find links to other sites where I am active.
        </Text>

        <Flex flexWrap="wrap" alignItems="center" justifyContent="center" maxW="800" mt={10}>
          {data.map(d=> (
            <Box as="a" p={4} m={4} href={d.link} borderWidth={1} rounded="lg" borderColor={d.color} flexBasis={['auto', "50%"]}>
              <Heading as="h3" size="md" mb="2">{d.platform} &rarr;</Heading>
              <Text fontSize="lg">{d.description}</Text>
            </Box>
          ))}
        </Flex>
      </main>

      <footer className={styles.footer}>
        Created with 🖤 by @kokaneka
      </footer>
    </div>
  )
}
