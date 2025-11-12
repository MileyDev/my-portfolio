import { Heading, VStack, Text, useColorModeValue } from '@chakra-ui/react';
import AboutSection from '../sections/AboutSection';
import ProjectsSection from '../sections/ProjectsSection';
import SkillsSection from '../sections/SkillsSection';

function Home() {
    const subheadingColor = useColorModeValue('gray.500', 'gray.400');

    return (
        <VStack spacing={16} align="stretch">
            <VStack spacing={2} align="center">
                <Heading as="h1" size="2xl" textAlign="center">
                    Micheal Sokoya
                </Heading>
                <Text fontSize="xl" fontWeight="500" color={subheadingColor}>
                    Full Stack Developer
                </Text>
            </VStack>
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
        </VStack>
    );
}

export default Home;