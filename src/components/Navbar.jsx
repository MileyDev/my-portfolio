import { Box, Flex, Button, useColorMode, IconButton, Heading } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
    const [isMounted, setIsMounted] = useState(false);
    const bgColor = useColorModeValue('white', 'black');
    const textColor = useColorModeValue('black', 'white');

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
        <Box bg={bgColor} px={4} py={3} shadow="md">
          <Flex maxW={{ base: '100%', md: 'container.xl' }} mx="auto" align="center" justify="space-between">
              <Heading size="sm" color={textColor} as="a" href="/">Micheal Sokoya</Heading>
              <Flex gap={{ base: 2, md: 4 }}>
                  <Button as={Link} to="/contact" variant="ghost" color={textColor} _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}>
            Contact
          </Button>
          {isMounted && (
            <IconButton
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={handleToggle}
              color={textColor}
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