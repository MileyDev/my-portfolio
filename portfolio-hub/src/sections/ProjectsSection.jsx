import { Box, Heading, SimpleGrid, Card, CardBody, Text, Button, Link, Image, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

const projects = [
  {
    title: 'Quizzer App',
    description: 'A quiz app with 100+ questions across Music, Geography, History, and Science, featuring levels and sound effects, African based.\n Built with Blazor.',
    link: 'https://wonderful-pebble-00006b310.1.azurestaticapps.net',
    repo: 'https://github.com/MileyDev/QuizApp',
    image: '/asset/quizzericon.jpg',
  },
  {
    title: 'MoneyWise',
    description: 'A personal finance app to track expenses and budgets with a smart AI and modern UI. Available to all devices on Google Play Store.\n Built with .NET MAUI',
    link: '#', // Update with actual URL
    repo: 'https://github.com/MileyDev/Moneywise',
    image: '/asset/moneywiseicon.jpg',
  },
  {
      title: 'Taskify (Task Tracker)',
      description: 'A console task tracker application, built using .NET and C#.',
      link: '#',
      repo: 'https://github.com/MileyDev/MileyTaskManager',
      image: '/asset/taskifyicon.jpg',
  }
];

function ProjectsSection() {
  return (
    <VStack spacing={6} align="start">
      <Heading as="h2" size="xl">
        Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {projects.map((project, index) => (
          <MotionCard
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            shadow="md"
            _hover={{ shadow: 'lg', transform: 'scale(1.05)' }}
          >
            <CardBody>
              <Image src={project.image} alt={project.title} borderRadius="md" mb={4} />
              <Heading size="md" mb={2}>
                {project.title}
              </Heading>
              <Text mb={4}>{project.description}</Text>
              <Button as={Link} href={project.link} colorScheme="primary" mr={2} isExternal>
                Live Demo
              </Button>
              <Button as={Link} href={project.repo} variant="outline" colorScheme="secondary" isExternal>
                GitHub
              </Button>
            </CardBody>
          </MotionCard>
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default ProjectsSection;