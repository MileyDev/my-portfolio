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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Icon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiExternalLink, FiGithub, FiArrowUpRight } from 'react-icons/fi';

const MotionCard = motion(Card);

const projects = {
  web: [
    {
      id: 'thoth',
      title: 'Thoth AI',
      category: 'Web',
      description:
        'An AI-powered reflection platform built to help people make sense of their thoughts through perspective, insight, stories, and grounded wisdom.',
      link: 'https://thinkyourthoth.space',
      repo: 'https://github.com/MileyDev/thoth',
      image: '/asset/thoth.png',
      tech: ['React', 'Vite', 'Chakra UI', 'OpenAI', 'AI'],
      featured: true,
    },
    {
      id: 'voxa',
      title: 'Voxa',
      category: 'Web',
      description:
        'An AI-powered pitch platform that helps founders and creators turn ideas into clearer, more compelling, investor-ready presentations.',
      link: 'https://voxapitch.vercel.app',
      repo: 'https://github.com/MileyDev/pitchpilot',
      image: '/asset/voxa_preview.png',
      tech: ['React', 'ASP.NET', 'TypeScript', 'OpenAI', 'Gemini', 'Paystack'],
      featured: true,
    },
    {
      id: 'urbanera-web',
      title: 'UrbanEra',
      category: 'Web',
      description:
        'A modern fashion e-commerce platform built for UrbanEra, combining a bold streetwear identity with product discovery, collections, local payments, and a streamlined shopping experience.',
      link: 'https://urban-era.shop',
      repo: 'https://github.com/MileyDev/urbanera-client',
      image: '/asset/urbanerashop.jpg',
      tech: ['React', 'ASP.NET Core', 'Stripe', 'Paystack'],
      featured: true,
    },
    {
      id: 'cardora',
      title: 'Cardora',
      category: 'Web',
      description:
        'A digital gift-card marketplace built to make buying, selling, and managing gift cards simple, with wallet balances, transaction tracking, and secure payout workflows.',
      link: 'https://www.cardora.net',
      repo: 'https://github.com/MileyDev/Cardora.Frontend',
      image: '/asset/cardoracover.jpg',
      tech: ['React', 'ASP.NET Core', 'JWT', 'PostgreSQL', 'Payments'],
      featured: true,
    },
    {
      id: 'toolbox',
      title: 'ToolBox',
      category: 'Web',
      description:
        'A marketplace for AI tools, social media utilities, digital products, and other creator-focused services, with an integrated purchasing experience.',
      link: 'https://toolbox-five-chi.vercel.app/',
      repo: 'https://github.com/MileyDev/toolbox',
      image: '/asset/toolbox.png',
      tech: ['React', 'ASP.NET', 'Marketplace', 'Payments'],
      featured: false,
    },
    {
      id: 'movyx',
      title: 'Movyx',
      category: 'Web',
      description:
        'A movie discovery platform designed to help users find what to watch, explore titles, and discover available streaming options.',
      link: 'https://movyx.vercel.app',
      repo: 'https://github.com/MileyDev/movyx',
      image: '/asset/movyx.png',
      tech: ['React', 'ASP.NET', 'TypeScript', 'API'],
      featured: false,
    },
    {
      id: 'goferman',
      title: 'Goferman',
      category: 'Web',
      description:
        'A lightweight API development tool designed to make testing endpoints faster, simpler, and more focused for developers.',
      link: 'https://goferman.vercel.app/launch',
      repo: 'https://github.com/MileyDev/goferman',
      image: '/asset/goferman.jpg',
      tech: ['React', 'ASP.NET', 'TypeScript'],
      featured: false,
    },
    {
      id: 'swiphtgen',
      title: 'SwiphtGen',
      category: 'Web',
      description:
        'A portfolio generator that transforms a GitHub profile into a polished personal website with minimal setup.',
      link: 'https://swipht-generator.vercel.app',
      repo: 'https://github.com/MileyDev/portfolio-gen',
      image: '/asset/swipht.jpg',
      tech: ['React', 'ASP.NET', 'Vercel'],
      featured: false,
    },
    {
      id: 'codestreak',
      title: 'CodeStreak',
      category: 'Web',
      description:
        'A developer productivity tool for tracking GitHub activity, coding streaks, commits, and progress through simple visual feedback.',
      link: 'https://code-streak-two.vercel.app',
      repo: 'https://github.com/MileyDev/Codestreak',
      image: '/asset/codestreak.png',
      tech: ['React', 'ASP.NET', 'GitHub API'],
      featured: false,
    },
    {
      id: 'naija-quizzer',
      title: 'Naija Quizzer',
      category: 'Web',
      description:
        'An interactive quiz game featuring 100+ questions across music, geography, history, and science, with a strong focus on African knowledge.',
      link: 'https://wonderful-pebble-00006b310.1.azurestaticapps.net',
      repo: 'https://github.com/MileyDev/QuizApp',
      image: '/asset/quizzericon.jpg',
      tech: ['Blazor', '.NET', 'Azure'],
      featured: false,
    },
  ],

  mobile: [
    {
      id: 'deep',
      title: 'Deep',
      category: 'Mobile',
      description:
        'A focus and journaling app designed around intentional daily routines, featuring live focus sessions, ambient sounds, habit insights, reminders, and iOS Live Activities.',
      link: 'https://apps.apple.com/us/app/deep-habit-wellness-app/id6788341644',
      repo: 'https://github.com/MileyDev/deep-web',
      image: '/asset/deepcover.png',
      tech: ['React Native', 'iOS', 'Live Activities', 'Notifications'],
      featured: true,
    },
    {
      id: 'urbanera-mobile',
      title: 'UrbanEra',
      category: 'Mobile',
      description:
        'The mobile shopping experience for UrbanEra, bringing the streetwear brand directly to iOS with product discovery, collections, and a streamlined shopping journey.',
      link: 'https://apps.apple.com/us/app/urbanera/id6774520504',
      repo: 'https://github.com/MileyDev/urbanera-client',
      image: '/asset/ue_mobile.png',
      tech: ['React Native', 'E-commerce', 'Payments'],
      featured: true,
    },
    {
      id: 'blox',
      title: 'Blox',
      category: 'Mobile',
      description:
        'A block puzzle game built with three distinct game modes and an additional daily challenge that gives players a fresh puzzle to solve every day.',
      link: 'https://apps.apple.com/us/app/blox-block-puzzle/id6788327530',
      repo: '#',
      image: '/asset/bloxcover.png',
      tech: ['React Native', 'Mobile Game', 'iOS'],
      featured: true,
    },
    {
      id: 'moneywise',
      title: 'MoneyWise',
      category: 'Mobile',
      description:
        'A personal finance app for tracking expenses, managing budgets, and understanding spending habits through a clean mobile experience and smart financial insights.',
      link: '#',
      repo: 'https://github.com/MileyDev/Moneywise',
      image: '/asset/moneywiseicon.jpg',
      tech: ['.NET MAUI', 'SQLite', 'AI', 'Mobile'],
      featured: false,
    },
  ],
};

function ProjectModal({ project, isOpen, onClose }) {
  const modalBg = useColorModeValue('white', 'gray.900');
  const modalText = useColorModeValue('gray.600', 'gray.300');
  const borderColor = useColorModeValue(
    'blackAlpha.100',
    'whiteAlpha.200'
  );
  const closeColor = useColorModeValue('gray.800', 'white');

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
      isCentered
      motionPreset="slideInBottom"
    >
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
            height={{ base: '190px', md: '250px' }}
            width="100%"
            objectFit="cover"
          />
        </ModalHeader>

        <ModalCloseButton color={closeColor} />

        <ModalBody p={{ base: 5, md: 7 }}>
          <VStack align="start" spacing={5}>
            <HStack spacing={2}>
              <Badge
                colorScheme="cyan"
                borderRadius="full"
                px={3}
                py={1}
              >
                {project.category}
              </Badge>

              {project.featured && (
                <Badge
                  colorScheme="blue"
                  variant="subtle"
                  borderRadius="full"
                  px={3}
                  py={1}
                >
                  Featured
                </Badge>
              )}
            </HStack>

            <VStack align="start" spacing={2}>
              <Heading size="lg">{project.title}</Heading>

              <Text color={modalText} lineHeight="1.8">
                {project.description}
              </Text>
            </VStack>

            <HStack flexWrap="wrap" gap={2}>
              {project.tech.map((tech) => (
                <Tag
                  key={tech}
                  size="sm"
                  variant="subtle"
                  colorScheme="cyan"
                  borderRadius="full"
                >
                  <TagLabel>{tech}</TagLabel>
                </Tag>
              ))}
            </HStack>

            <HStack mt={1} spacing={3}>
              {project.link !== '#' && (
                <Button
                  as={Link}
                  href={project.link}
                  colorScheme="blue"
                  size="sm"
                  isExternal
                  rightIcon={<FiExternalLink />}
                  _hover={{
                    transform: 'translateY(-2px)',
                    textDecoration: 'none',
                  }}
                >
                  {project.category === 'Mobile'
                    ? 'View App'
                    : 'View Live'}
                </Button>
              )}

              {project.repo !== '#' && (
                <Button
                  as={Link}
                  href={project.repo}
                  variant="outline"
                  colorScheme="gray"
                  size="sm"
                  isExternal
                  rightIcon={<FiGithub />}
                  _hover={{
                    transform: 'translateY(-2px)',
                    textDecoration: 'none',
                  }}
                >
                  GitHub
                </Button>
              )}
            </HStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

function ProjectCard({ project, index, onOpen }) {
  const borderColor = useColorModeValue(
    'blackAlpha.100',
    'whiteAlpha.200'
  );
  const cardBg = useColorModeValue(
    'whiteAlpha.900',
    'whiteAlpha.80'
  );
  const mutedColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <MotionCard
      key={project.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
      }}
      cursor="pointer"
      overflow="hidden"
      bg={cardBg}
      border="1px solid"
      borderColor={borderColor}
      borderRadius="2xl"
      shadow="lg"
      onClick={() => onOpen(project)}
      whileHover={{
        y: -8,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.985 }}
    >
      <Box position="relative" overflow="hidden">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.35 }}
        >
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

        <HStack
          position="absolute"
          top={4}
          left={4}
          spacing={2}
        >
          <Badge
            colorScheme="cyan"
            borderRadius="full"
            px={3}
            py={1}
          >
            {project.category}
          </Badge>

          {project.featured && (
            <Badge
              colorScheme="blue"
              variant="solid"
              borderRadius="full"
              px={3}
              py={1}
            >
              Featured
            </Badge>
          )}
        </HStack>

        <VStack
          position="absolute"
          left={4}
          right={4}
          bottom={4}
          align="start"
          spacing={2}
        >
          <Heading size="sm" color="white">
            {project.title}
          </Heading>

          <HStack spacing={2} flexWrap="wrap">
            {project.tech.slice(0, 3).map((tech) => (
              <Tag
                key={tech}
                size="sm"
                borderRadius="full"
                bg="whiteAlpha.200"
                color="white"
              >
                <TagLabel>{tech}</TagLabel>
              </Tag>
            ))}
          </HStack>
        </VStack>
      </Box>

      <CardBody p={5}>
        <VStack align="start" spacing={4}>
          <Text
            noOfLines={3}
            color={mutedColor}
            fontSize="sm"
            lineHeight="1.7"
          >
            {project.description}
          </Text>

          <HStack
            justify="space-between"
            w="full"
            align="center"
          >
            <Badge
              colorScheme="blue"
              variant="subtle"
              fontSize="2xs"
              px={2}
              py={1}
              borderRadius="full"
            >
              Open details
            </Badge>

            <HStack
              spacing={1}
              color={mutedColor}
              fontSize="xs"
            >
              <Text>{project.tech.length} technologies</Text>
              <Icon as={FiArrowUpRight} />
            </HStack>
          </HStack>
        </VStack>
      </CardBody>
    </MotionCard>
  );
}

function ProjectsSection() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState(null);

  const sectionBg = useColorModeValue(
    'rgba(255,255,255,0.78)',
    'rgba(255,255,255,0.04)'
  );

  const mutedColor = useColorModeValue(
    'gray.600',
    'gray.300'
  );

  const openModal = (project) => {
    setSelectedProject(project);
    onOpen();
  };

  return (
    <>
      <Box
        position="relative"
        py={10}
        px={{ base: 0, md: 2 }}
      >
        <Box
          position="absolute"
          inset={{
            base: '24px -8px -12px -8px',
            md: '10px -18px -18px -18px',
          }}
          bg={sectionBg}
          borderRadius="32px"
          filter="blur(2px)"
          zIndex={0}
        />

        <VStack
          spacing={8}
          align="start"
          position="relative"
          zIndex={1}
        >
          {/* Section heading */}
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
                  bgGradient:
                    'linear(to-r, blue.400, cyan.400)',
                  borderRadius: 'full',
                }}
              >
                My Projects
              </Heading>

              <Text color={mutedColor} maxW="2xl" lineHeight="1.8">
                A selection of products I've designed and shipped
                across AI, fintech, commerce, developer tooling,
                and mobile experiences.
              </Text>
            </VStack>
          </motion.div>

          {/* Project tabs */}
          <Tabs
            variant="soft-rounded"
            colorScheme="blue"
            w="full"
            isLazy
          >
            <TabList
              bg={useColorModeValue(
                'blackAlpha.50',
                'whiteAlpha.100'
              )}
              p={1.5}
              borderRadius="full"
              w="fit-content"
              maxW="100%"
              overflowX="auto"
              sx={{
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
                scrollbarWidth: 'none',
              }}
            >
              <Tab
                px={{ base: 5, md: 7 }}
                py={2.5}
                fontWeight="600"
                fontSize="sm"
              >
                Web
              </Tab>

              <Tab
                px={{ base: 5, md: 7 }}
                py={2.5}
                fontWeight="600"
                fontSize="sm"
              >
                Mobile
              </Tab>
            </TabList>

            <TabPanels>
              {/* Web */}
              <TabPanel px={0} pt={7}>
                <VStack
                  align="start"
                  spacing={5}
                  w="full"
                >
                  <HStack
                    justify="space-between"
                    w="full"
                    align="end"
                  >
                    <VStack
                      align="start"
                      spacing={1}
                    >
                      <Heading size="md">
                        Web Applications
                      </Heading>

                      <Text
                        fontSize="sm"
                        color={mutedColor}
                      >
                        Platforms, products, and tools built
                        for the web.
                      </Text>
                    </VStack>

                    <Badge
                      display={{ base: 'none', sm: 'flex' }}
                      colorScheme="blue"
                      borderRadius="full"
                      px={3}
                      py={1}
                    >
                      {projects.web.length} projects
                    </Badge>
                  </HStack>

                  <SimpleGrid
                    columns={{
                      base: 1,
                      md: 2,
                      xl: 3,
                    }}
                    spacing={6}
                    w="full"
                  >
                    {projects.web.map(
                      (project, index) => (
                        <ProjectCard
                          key={project.id}
                          project={project}
                          index={index}
                          onOpen={openModal}
                        />
                      )
                    )}
                  </SimpleGrid>
                </VStack>
              </TabPanel>

              {/* Mobile */}
              <TabPanel px={0} pt={7}>
                <VStack
                  align="start"
                  spacing={5}
                  w="full"
                >
                  <HStack
                    justify="space-between"
                    w="full"
                    align="end"
                  >
                    <VStack
                      align="start"
                      spacing={1}
                    >
                      <Heading size="md">
                        Mobile Applications
                      </Heading>

                      <Text
                        fontSize="sm"
                        color={mutedColor}
                      >
                        Native-feeling mobile experiences
                        built with modern cross-platform
                        technologies.
                      </Text>
                    </VStack>

                    <Badge
                      display={{ base: 'none', sm: 'flex' }}
                      colorScheme="cyan"
                      borderRadius="full"
                      px={3}
                      py={1}
                    >
                      {projects.mobile.length} projects
                    </Badge>
                  </HStack>

                  <SimpleGrid
                    columns={{
                      base: 1,
                      md: 2,
                      xl: 3,
                    }}
                    spacing={6}
                    w="full"
                  >
                    {projects.mobile.map(
                      (project, index) => (
                        <ProjectCard
                          key={project.id}
                          project={project}
                          index={index}
                          onOpen={openModal}
                        />
                      )
                    )}
                  </SimpleGrid>
                </VStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
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