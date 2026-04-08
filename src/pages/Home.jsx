import { Box, Heading, VStack, Text, useColorModeValue, Badge } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import AboutSection from '../sections/AboutSection';
import ProjectsSection from '../sections/ProjectsSection';
import SkillsSection from '../sections/SkillsSection';

const MotionBox = motion(Box);

function Home() {
  const subheadingColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <VStack spacing={16} align="stretch">
      <MotionBox
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        position="relative"
        overflow="hidden"
        borderRadius="3xl"
        px={{ base: 6, md: 10 }}
        py={{ base: 12, md: 16 }}
        bg={useColorModeValue('rgba(255,255,255,0.72)', 'rgba(255,255,255,0.05)')}
        border="1px solid"
        borderColor={useColorModeValue('blackAlpha.100', 'whiteAlpha.200')}
      >
        <Box
          position="absolute"
          top="-90px"
          right="-70px"
          h="240px"
          w="240px"
          borderRadius="full"
          bgGradient="linear(to-br, cyan.200, blue.400)"
          opacity={0.16}
          filter="blur(20px)"
        />

        <VStack spacing={4} align="center" textAlign="center" position="relative" zIndex={1}>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <Badge colorScheme="blue" borderRadius="full" px={4} py={1.5}>
              Building products across web, mobile, and AI
            </Badge>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
          >
            <Heading as="h1" size="2xl" textAlign="center">
              Micheal Sokoya
            </Heading>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="600" color={subheadingColor}>
              Full Stack Developer crafting dependable digital experiences.
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.28 }}
          >
            <Text maxW="3xl" color={subheadingColor}>
              I design and ship ambitious products with React, .NET, Node.js, and cloud-native
              tooling, balancing sharp interfaces with solid engineering underneath.
            </Text>
          </motion.div>
        </VStack>
      </MotionBox>

      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
    </VStack>
  );
}

export default Home;
