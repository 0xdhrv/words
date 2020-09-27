import { Box, Flex, Heading, Link } from 'theme-ui'

function Footer() {
  return (
    <Flex
      sx={{
        width: '100%',
        borderWidth: 0,
        borderTopWidth: 1,
        borderStyle: 'solid',
        borderColor: 'muted',
      }}
    >
      <Box p={3}>
        <Heading>~</Heading>
      </Box>
      <Box p={3} sx={{ flex: '1 1 auto' }}></Box>
      <Box p={3}>
        <Heading
          sx={{
            fontSize: 26,
            cursor: 'pointer',
            textDecoration: 'none',
          }}
        >
          <Link href="https://dhrv.pw/" target="_blank" rel="noopener">
            <a href="https://dhrv.pw/" target="_blank" rel="noopener">
              dhruv.
            </a>
          </Link>
        </Heading>
      </Box>
    </Flex>
  )
}

export default Footer
