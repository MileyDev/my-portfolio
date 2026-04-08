import { Box, Flex, Button, useColorMode, IconButton, Heading, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const MotionBox = motion(Box);

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isMounted, setIsMounted] = useState(false);
  const bgColor = useColorModeValue('rgba(255,255,255,0.72)', 'rgba(15,17,23,0.82)');
  const textColor = useColorModeValue('gray.800', 'white');
  const hoverBg = useColorModeValue('gray.100', 'whiteAlpha.200');
  const borderColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.200');

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
    <MotionBox
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      position="sticky"
      top={0}
      zIndex={10}
      px={{ base: 4, md: 6 }}
      py={4}
    >
      <Box
        bg={bgColor}
        border="1px solid"
        borderColor={borderColor}
        borderRadius="full"
        boxShadow="lg"
        backdropFilter="blur(16px)"
      >
        <Flex
          maxW="container.xl"
          mx="auto"
          px={{ base: 4, md: 6 }}
          py={3}
          align="center"
          justify="space-between"
        >
          <motion.div whileHover={{ y: -1 }}>
            <Heading size="sm" color={textColor} as={Link} to="/">
              Micheal Sokoya
            </Heading>
          </motion.div>

          <Flex gap={{ base: 2, md: 3 }} align="center">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <Button as={Link} to="/contact" variant="ghost" color={textColor} _hover={{ bg: hoverBg }}>
                Contact
              </Button>
            </motion.div>

            {isMounted && (
              <motion.div whileHover={{ rotate: 8, y: -2 }} whileTap={{ scale: 0.95 }}>
                <IconButton
                  icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                  onClick={handleToggle}
                  color={textColor}
                  variant="ghost"
                  aria-label="Toggle color mode"
                  _hover={{ bg: hoverBg }}
                  borderRadius="full"
                />
              </motion.div>
            )}
          </Flex>
        </Flex>
      </Box>
    </MotionBox>
  );
}

export default Navbar;
