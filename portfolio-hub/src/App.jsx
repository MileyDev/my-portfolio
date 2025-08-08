import { Routes, Route } from 'react-router-dom';
import { Box, Container, useColorMode } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';

const MotionBox = motion(Box);

function App() {
  const { colorMode } = useColorMode();

  return (
    <Box bg={colorMode === 'light' ? 'background.light' : 'background.dark'} minH="100vh">
      <Navbar />
      <Container maxW="100%" py={8}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MotionBox>
      </Container>
    </Box>
  );
}

export default App;