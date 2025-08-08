import { Box, Flex, Button, useColorMode, IconButton, Heading } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const stored = localStorage.getItem('colorMode');
    if (stored && stored !== colorMode) {
      toggleColorMode();
    }
  }, [colorMode, toggleColorMode]);

  const handleToggle = () => {
    toggleColorMode();
    localStorage.setItem('colorMode', colorMode === 'light' ? 'dark' : 'light');
  };

  return (
    <Box bg={colorMode === 'light' ? 'primary' : 'secondary'} px={4} py={3} shadow="md">
      <Flex maxW={{ base: '100%', md: 'container.lg' }} mx="auto" align="center" justify="space-between">
        <Heading size="md" color="blue">Micheal Sokoya</Heading>
        <Flex gap={{ base: 2, md: 4}}>
          <Button as={Link} to="/" variant="ghost" color="white">
            Home
          </Button>
          <Button as={Link} to="/contact" variant="ghost" color="white">
            Contact
          </Button>
          {isMounted && (
            <IconButton
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={handleToggle}
              color="white"
              variant="ghost"
              aria-label="Toggle color mode"
            />
          )}
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;