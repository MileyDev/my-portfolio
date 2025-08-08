import { Box, Heading, VStack } from '@chakra-ui/react';
import AboutSection from '../sections/AboutSection';
import ProjectsSection from '../sections/ProjectsSection';
import SkillsSection from '../sections/SkillsSection';

function Home() {
  return (
    <VStack spacing={16} align="stretch">
      <Heading as="h1" size="2xl" textAlign="center">
        Welcome to Miley's' Hub
      </Heading>
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
    </VStack>
  );
}

export default Home;