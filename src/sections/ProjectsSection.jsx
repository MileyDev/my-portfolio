import { Box, Heading, SimpleGrid, Card, CardBody, Text, Button, Link, Image, VStack, background } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

const projects = [
  {
    title: 'Cardora',
    description: 'A trading platform with robust features and visuals built for users to purchase and sell gift cards. Built on contract',
    link: 'https://www.cardora.net',
    repo: 'https://github.com/MileyDev/Cardora.Frontend',
    image: '/asset/cardoracover.jpg',
  },
  {
    title: 'UrbanEra Fashion Store',
    description: 'A sleek modern e-commerce clothing store supporting fully functional local payment methods, smooth effects and animations.\n Built with React and ASP.Net Core.',
    link: 'https://urban-era.shop',
    repo: 'https://github.com/MileyDev/urbanera-client',
    image: '/asset/urbanerashop.jpg',
  },
  {
    title: 'SwiphtGen',
    description: 'A simple, very impactful tool for generating personal portfolio websites in just a click, simply input your GitHub username to try.\n Built with ASP.Net and React.',
    link: 'https://swipht-generator.vercel.app', 
    repo: 'https://github.com/MileyDev/portfolio-gen',
    image: '/asset/swipht.jpg',
  },
  {
    title: 'CodeStreak',
    description: 'A minimal web tool for developers to track their coding journey e.g coding streak counts, total Github commits and even badges for progress.\n Built with React & ASP.Net Core.',
    link: 'https://code-streak-two.vercel.app',
    repo: 'https://github.com/MileyDev/Codestreak',
    image: '/asset/codestreak.jpg',
  },
  {
    title: 'Naija Quizzer',
    description: 'A quiz game with 100+ questions across Music, Geography, History, and Science, featuring levels and sound effects, African based quizzes.\n Built with Blazor.',
    link: 'https://wonderful-pebble-00006b310.1.azurestaticapps.net',
    repo: 'https://github.com/MileyDev/QuizApp',
    image: '/asset/quizzericon.jpg',
  },
  {
    title: 'MoneyWise',
    description: 'A personal finance app to track expenses and budgets with a smart AI and modern UI. Available to all devices on Google Play Store.\n Built with .NET MAUI',
    link: '#', 
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
        My Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {projects.map((project, index) => (
          <MotionCard
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            shadow="md"
            background={{ background: '#6abed7ff'}}
            _hover={{ shadow: 'lg', transform: 'scale(1.05)' }}
          >
            <CardBody>
              <Image src={project.image} alt={project.title} borderRadius="md" mb={4} />
              <Heading size="md" mb={2}>
                {project.title}
              </Heading>
              <Text mb={4}>{project.description}</Text>
              <Button as={Link} href={project.link} variant="outline" colorScheme="primary" mr={2} isExternal>
                View Live
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