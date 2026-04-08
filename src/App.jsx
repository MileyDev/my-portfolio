import { Routes, Route, useLocation } from 'react-router-dom';
import { Box, Container, useColorModeValue } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';

const MotionBox = motion(Box);

function App() {
  const location = useLocation();
  const bg = useColorModeValue('#f6f8fc', '#0f1117');
  const gradient = useColorModeValue(
    'radial(circle at top right, rgba(33,150,243,0.16), transparent 32%), radial(circle at bottom left, rgba(0,200,131,0.12), transparent 28%)',
    'radial(circle at top right, rgba(66,153,225,0.18), transparent 32%), radial(circle at bottom left, rgba(56,178,172,0.14), transparent 28%)'
  );

  return (
    <Box bg={bg} minH="100vh" position="relative" overflow="hidden">
      <Box position="fixed" inset={0} pointerEvents="none" bgImage={gradient} />

      <Navbar />

      <Container maxW="container.xl" py={{ base: 6, md: 8 }} position="relative" zIndex={1}>
        <AnimatePresence mode="wait">
          <MotionBox
            key={location.pathname}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </MotionBox>
        </AnimatePresence>
      </Container>
    </Box>
  );
}

export default App;
