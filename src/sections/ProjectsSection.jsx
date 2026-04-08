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
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionCard = motion(Card);

const techStackMap = {
  Cardora: ['React', 'NodeJS', 'ASP.NET', 'Smart Contracts'],
  'Voxa - AI-Powered Pitch Deck Builder': ['React', 'ASP.NET', 'OpenAI', 'Gemini', 'Paystack', 'TypeScript'],
  'UrbanEra Fashion Store': ['React', 'ASP.NET Core', 'Stripe', 'Paystack'],
  Movyx: ['React', 'ASP.NET', 'Typescript', 'TailwindCSS'],
  Goferman: ['React', 'ASP.NET', 'TypeScript'],
  SwiphtGen: ['React', 'ASP.NET', 'Vercel'],
  CodeStreak: ['React', 'GitHub', 'ASP.NET'],
  'Naija Quizzer': ['Blazor', '.NET', 'Azure'],
  MoneyWise: ['.NET MAUI', 'Xamarin', 'SQLite', 'AI'],
  'Taskify (Task Tracker)': ['C#', '.NET Console'],
  'Thoth - Master your thoths': ['React', 'Vite', 'Chakra UI', 'AI Product'],
  ToolBox: ['React', 'ASP.NET', 'Marketplace', 'Payments'],
};

const projects = [
  {
    title: 'Thoth AI - Master your thoughts',
    description: 'Thoth gives form to uncertainty. It is not built for endless chatter. It exists to offer perspective, crafted insight, and grounded wisdom when the mind needs direction.',
    link: 'https://thinkyourthoth.space',
    repo: 'https://github.com/MileyDev/thoth',
    image: '/asset/thoth.png',
  },
  {
    title: 'Voxa - AI-Powered Pitch Deck Builder',
    description: 'Voxa is a precision-built platform that helps creators, founders and teams craft, refine, and perfect high-impact pitches with data-driven clarity.',
    link: 'https://voxapitch.vercel.app',
    repo: 'https://github.com/MileyDev/pitchpilot',
    image: '/asset/voxa_preview.png',
  },
  {
    title: 'Cardora',
    description: 'A trading platform with robust features and visuals built for users to purchase and sell gift cards. Built on contract.',
    link: 'https://www.cardora.net',
    repo: 'https://github.com/MileyDev/Cardora.Frontend',
    image: '/asset/cardoracover.jpg',
  },
  {
    title: 'Movyx',
    description: 'Your go-to for latest movie discovery, included with direct streaming links if available. Grab your popcorn before diving into this one.',
    link: 'https://movyx.vercel.app',
    repo: 'https://github.com/MileyDev/movyx',
    image: '/asset/movyx.png',
  },
  {
    title: 'Goferman',
    description: 'An API development tool built for developers who want speed, focus, and a lightweight workflow for testing endpoints.',
    link: 'https://goferman.vercel.app/launch',
    repo: 'https://github.com/MileyDev/goferman',
    image: '/asset/goferman.jpg',
  },
  {
    title: 'UrbanEra Fashion Store',
    description: 'A sleek modern e-commerce clothing store supporting local payments, polished interactions, and a smooth shopping experience.',
    link: 'https://urban-era.shop',
    repo: 'https://github.com/MileyDev/urbanera-client',
    image: '/asset/urbanerashop.jpg',
  },
  {
    title: 'ToolBox',
    description: 'A marketplace for AI tools, social media growth utilities, digital products, and more in one trusted buying experience.',
    link: 'https://toolbox-five-chi.vercel.app/',
    repo: 'https://github.com/MileyDev/toolbox',
    image: '/asset/toolbox.png',
  },
  {
    title: 'SwiphtGen',
    description: 'A fast portfolio generator that turns a GitHub profile into a personal website in just a click.',
    link: 'https://swipht-generator.vercel.app',
    repo: 'https://github.com/MileyDev/portfolio-gen',
    image: '/asset/swipht.jpg',
  },
  {
    title: 'CodeStreak',
    description: 'A minimal tool for tracking streak counts, GitHub commits, and coding progress with clean visual feedback.',
    link: 'https://code-streak-two.vercel.app',
    repo: 'https://github.com/MileyDev/Codestreak',
    image: '/asset/codestreak.png',
  },
  {
    title: 'Naija Quizzer',
    description: 'A quiz game with 100+ questions across music, geography, history, and science, centered on African knowledge.',
    link: 'https://wonderful-pebble-00006b310.1.azurestaticapps.net',
    repo: 'https://github.com/MileyDev/QuizApp',
    image: '/asset/quizzericon.jpg',
  },
  {
    title: 'MoneyWise',
    description: 'A personal finance app for tracking budgets and expenses with a modern UI and smart AI assistance.',
    link: '#',
    repo: 'https://github.com/MileyDev/Moneywise',
    image: '/asset/moneywiseicon.jpg',
  },
  {
    title: 'Taskify (Task Tracker)',
    description: 'A console-based task tracker application built with .NET and C#.',
    link: '#',
    repo: 'https://github.com/MileyDev/MileyTaskManager',
    image: '/asset/taskifyicon.jpg',
  },
];

function ProjectModal({ project, isOpen, onClose }) {
  const techs = techStackMap[project.title] || [];
  const modalBg = useColorModeValue('white', 'gray.900');
  const modalText = useColorModeValue('gray.600', 'gray.300');
  const borderColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.200');
  const closeColor = useColorModeValue('gray.800', 'white');

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered motionPreset="slideInBottom">
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent
        bg={modalBg}
        border="1px solid"
        borderColor={borderColor}
        borderRadius="2xl"
        overflow="hidden"
        mx={4}
      >
        <ModalHeader p={0}>
          <Image
            src={project.image}
            alt={project.title}
            height="220px"
            width="100%"
            objectFit="cover"
          />
        </ModalHeader>
        <ModalCloseButton color={closeColor} />
        <ModalBody p={6}>
          <VStack align="start" spacing={4}>
            <Badge colorScheme="cyan" borderRadius="full" px={3} py={1}>
              Selected project
            </Badge>
            <Heading size="lg">{project.title}</Heading>
            <Text color={modalText}>{project.description}</Text>

            {techs.length > 0 && (
              <HStack flexWrap="wrap" gap={2}>
                {techs.map((tech) => (
                  <Tag key={tech} size="sm" variant="subtle" colorScheme="cyan" borderRadius="full">
                    <TagLabel>{tech}</TagLabel>
                  </Tag>
                ))}
              </HStack>
            )}

            <HStack mt={2}>
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

function ProjectsSection() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionBg = useColorModeValue('rgba(255,255,255,0.78)', 'rgba(255,255,255,0.04)');
  const cardBg = useColorModeValue('whiteAlpha.900', 'whiteAlpha.80');
  const borderColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.200');
  const mutedColor = useColorModeValue('gray.600', 'gray.300');

  const openModal = (project) => {
    setSelectedProject(project);
    onOpen();
  };

  return (
    <>
      <Box position="relative" py={10} px={{ base: 0, md: 2 }}>
        <Box
          position="absolute"
          inset={{ base: '24px -8px -12px -8px', md: '10px -18px -18px -18px' }}
          bg={sectionBg}
          borderRadius="32px"
          filter="blur(2px)"
          zIndex={0}
        />

        <VStack spacing={8} align="start" position="relative" zIndex={1}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%' }}
          >
            <VStack align="start" spacing={3}>
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
              <Text color={mutedColor} maxW="2xl">
                A selection of products I have designed and shipped across AI, fintech, commerce,
                developer tooling, and mobile experiences.
              </Text>
            </VStack>
          </motion.div>

          <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={6} w="full">
            {projects.map((project, index) => {
              const techs = techStackMap[project.title] || [];

              return (
                <MotionCard
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  cursor="pointer"
                  overflow="hidden"
                  bg={cardBg}
                  border="1px solid"
                  borderColor={borderColor}
                  borderRadius="2xl"
                  shadow="lg"
                  onClick={() => openModal(project)}
                  whileHover={{ y: -10 }}
                  whileTap={{ scale: 0.985 }}
                >
                  <Box position="relative" overflow="hidden">
                    <motion.div whileHover={{ scale: 1.06 }} transition={{ duration: 0.35 }}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        height="210px"
                        width="100%"
                        objectFit="cover"
                      />
                    </motion.div>
                    <Box
                      position="absolute"
                      inset={0}
                      bgGradient="linear(to-t, blackAlpha.800, transparent 55%)"
                    />
                    <Badge
                      position="absolute"
                      top={4}
                      left={4}
                      colorScheme="cyan"
                      borderRadius="full"
                      px={3}
                      py={1}
                    >
                      Featured build
                    </Badge>
                    <VStack position="absolute" left={4} right={4} bottom={4} align="start" spacing={2}>
                      <Heading size="sm" color="white">
                        {project.title}
                      </Heading>
                      <HStack spacing={2} flexWrap="wrap">
                        {techs.slice(0, 3).map((tech) => (
                          <Tag key={tech} size="sm" borderRadius="full" bg="whiteAlpha.200" color="white">
                            <TagLabel>{tech}</TagLabel>
                          </Tag>
                        ))}
                      </HStack>
                    </VStack>
                  </Box>

                  <CardBody p={5}>
                    <VStack align="start" spacing={4}>
                      <Text noOfLines={3} color={mutedColor} fontSize="sm">
                        {project.description}
                      </Text>
                      <HStack justify="space-between" w="full">
                        <Badge colorScheme="blue" variant="subtle" fontSize="2xs" px={2} py={1} borderRadius="full">
                          Open details
                        </Badge>
                        <Text fontSize="xs" color={mutedColor}>
                          {techs.length || 1} technologies
                        </Text>
                      </HStack>
                    </VStack>
                  </CardBody>
                </MotionCard>
              );
            })}
          </SimpleGrid>
        </VStack>
      </Box>

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
