import Link from 'next/link'
import { Flex, Box, Heading } from 'theme-ui'

function Header() {
  return (
    <Flex
      sx={{
        width: '100%',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: 'muted',
      }}
    >
      <Box>
        <Link href="/">
          <a>
            <Heading
              sx={{
                cursor: 'pointer',
                textDecoration: 'none',
              }}
            >
              words
            </Heading>
          </a>
        </Link>
      </Box>
      <Box></Box>
      <Box></Box>
    </Flex>
  )
}

export default Header
