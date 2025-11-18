import {
  Box,
  Heading,
  SimpleGrid,
  Card,
  CardBody,
  Text,
  Button,
  Link,
  Image,
  VStack,
  Tag,
  TagLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  HStack,
  Badge,
  useColorModeValue,
  chakra,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionCard = motion(Card);

/* -------------------------------------------------
   Tech-stack mapping (feel free to edit)
   ------------------------------------------------- */
const techStackMap = {
  Cardora: ['React', 'Node.js', 'Smart Contracts'],
  'UrbanEra Fashion Store': ['React', 'ASP.NET Core', 'Stripe', 'Paystack'],
  Goferman: ['React', 'ASP.NET', 'Typescript'],
  SwiphtGen: ['React', 'ASP.NET', 'Vercel'],
  CodeStreak: ['React', 'GitHub API', 'ASP.NET'],
  'Naija Quizzer': ['Blazor', '.NET', 'Azure'],
  MoneyWise: ['.NET MAUI', 'SQLite', 'AI'],
  'Taskify (Task Tracker)': ['C#', '.NET Console'],
};


const projects = [
  {
    title: 'Cardora',
    description:
      'A trading platform with robust features and visuals built for users to purchase and sell gift cards. Built on contract',
    link: 'https://www.cardora.net',
    repo: 'https://github.com/MileyDev/Cardora.Frontend',
    image: '/asset/cardoracover.jpg',
  },
  {
    title: 'UrbanEra Fashion Store',
    description:
      'A sleek modern e-commerce clothing store supporting fully functional local payment methods, smooth effects and animations.\n Built with React and ASP.Net Core.',
    link: 'https://urban-era.shop',
    repo: 'https://github.com/MileyDev/urbanera-client',
    image: '/asset/urbanerashop.jpg',
  },
  {
    title: 'Goferman',
    description: 'An API development tool, fast and lightweight. I built this for developers who want speed, dive in and test your APIs',
    link: 'https://goferman.vercel.app/launch',
    repo: 'https://github.com/MileyDev/goferman',
    image: '/asset/goferman.jpg',
  },
  {
    title: 'SwiphtGen',
    description:
      'A simple, very impactful tool for generating personal portfolio websites in just a click, simply input your GitHub username to try.\n Built with ASP.Net and React.',
    link: 'https://swipht-generator.vercel.app',
    repo: 'https://github.com/MileyDev/portfolio-gen',
    image: '/asset/swipht.jpg',
  },
  {
    title: 'CodeStreak',
    description:
      'A minimal web tool for developers to track their coding journey e.g coding streak counts, total Github commits and even badges for progress.\n Built with React & ASP.Net Core.',
    link: 'https://code-streak-two.vercel.app',
    repo: 'https://github.com/MileyDev/Codestreak',
    image: '/asset/codestreak.png',
  },
  {
    title: 'Naija Quizzer',
    description:
      'A quiz game with 100+ questions across Music, Geography, History, and Science, featuring levels and sound effects, African based quizzes.\n Built with Blazor.',
    link: 'https://wonderful-pebble-00006b310.1.azurestaticapps.net',
    repo: 'https://github.com/MileyDev/QuizApp',
    image: '/asset/quizzericon.jpg',
  },
  {
    title: 'MoneyWise',
    description:
      'A personal finance app to track expenses and budgets with a smart AI and modern UI. Available to all devices on Google Play Store.\n Built with .NET MAUI',
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
  },
];

/* -------------------------------------------------
   Modal component
   ------------------------------------------------- */
function ProjectModal({ project, isOpen, onClose }) {
  const techs = techStackMap[project.title] || [];

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent
        bg="whiteAlpha.100"
        backdropFilter="blur(16px)"
        border="1px solid"
        borderColor="whiteAlpha.200"
        borderRadius="2xl"
        overflow="hidden"
        mx={4}
      >
        <ModalHeader p={0}>
          <Image
            src={project.image}
            alt={project.title}
            height="200px"
            width="100%"
            objectFit="cover"
          />
        </ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody p={6}>
          <VStack align="start" spacing={4}>
            <Heading size="lg">
              {project.title}
            </Heading>

            <Text whiteSpace="pre-wrap">
              {project.description}
            </Text>

            {techs.length > 0 && (
              <HStack flexWrap="wrap" gap={2}>
                {techs.map((tech) => (
                  <Tag key={tech} size="sm" variant="subtle" colorScheme="cyan">
                    <TagLabel>{tech}</TagLabel>
                  </Tag>
                ))}
              </HStack>
            )}

            <HStack mt={4}>
              {project.link !== '#' && (
                <Button
                  as={Link}
                  href={project.link}
                  colorScheme="blue"
                  size="sm"
                  isExternal
                  _hover={{ transform: 'translateY(-2px)' }}
                >
                  View Live
                </Button>
              )}
              <Button
                as={Link}
                href={project.repo}
                variant="outline"
                colorScheme="gray"
                size="sm"
                isExternal
                _hover={{ transform: 'translateY(-2px)' }}
              >
                GitHub
              </Button>
            </HStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

/* -------------------------------------------------
   Main ProjectsSection component
   ------------------------------------------------- */
function ProjectsSection() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    onOpen();
  };

  return (
    <>
      <VStack spacing={8} align="start" py={10}>
        <Heading
          as="h2"
          size="xl"
          position="relative"
          _after={{
            content: '""',
            position: 'absolute',
            bottom: '-8px',
            left: 0,
            width: '60px',
            height: '4px',
            bgGradient: 'linear(to-r, blue.400, cyan.400)',
            borderRadius: 'full',
          }}
        >
          My Projects
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} w="full">
          {projects.map((project, index) => (
            <MotionCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              cursor="pointer"
              overflow="hidden"
              bg="whiteAlpha.50"
              backdropFilter="blur(12px)"
              border="1px solid"
              borderColor="whiteAlpha.200"
              borderRadius="xl"
              shadow="lg"
              _hover={{
                shadow: '2xl',
                transform: 'translateY(-8px)',
                borderColor: 'blue.400',
              }}
              onClick={() => openModal(project)}
              whileTap={{ scale: 0.98 }}
            >
              <Box position="relative" overflow="hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  height="180px"
                  width="100%"
                  objectFit="cover"
                  transition="transform 0.4s ease"
                  _groupHover={{ transform: 'scale(1.08)' }}
                />
                <chakra.div
                  position="absolute"
                  inset={0}
                  bgGradient="linear(to-t, transparent, blackAlpha.700)"
                />
              </Box>

              <CardBody p={5}>
                <Heading size="md" mb={2}>
                  {project.title}
                </Heading>
                <Text mb={4} noOfLines={2} fontSize="sm">
                  {project.description}
                </Text>

                <HStack justify="space-between">
                  <Badge colorScheme="blue" variant="solid" fontSize="2xs">
                    Click to view
                  </Badge>
                  <Text fontSize="xs" color="gray.400">
                    {(techStackMap[project.title] || []).length} technologies
                  </Text>
                </HStack>
              </CardBody>
            </MotionCard>
          ))}
        </SimpleGrid>
      </VStack>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </>
  );
}

export default ProjectsSection;