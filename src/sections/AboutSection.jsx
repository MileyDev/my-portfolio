import {
  Box,
  Heading,
  Text,
  VStack,
  Image,
  HStack,
  IconButton,
  SimpleGrid,
  Badge,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faWhatsapp, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const socialLinks = [
  {
    label: 'X formerly Twitter',
    href: 'https://x.com/polymathic__4?t=co91U5OuDEQz5b8fGMWdWQ&s=09',
    icon: faXTwitter,
    colorScheme: 'gray',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/micheal-sokoya-4a3307364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: faLinkedin,
    colorScheme: 'linkedin',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/MileyDev',
    icon: faGithub,
    colorScheme: 'gray',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/+2348065154550',
    icon: faWhatsapp,
    colorScheme: 'whatsapp',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/mmmmmileyyyyyyyyyyyyyy?igsh=MTVvOWtrM3M5MXdqZQ==',
    icon: faInstagram,
    colorScheme: 'pink',
  },
];

const highlights = [
  { value: '5+', label: 'Years building web experiences' },
  { value: '12+', label: 'Products shipped from idea to launch' },
  { value: '3', label: 'Cloud and app ecosystems used daily' },
];

function AboutSection() {
  const cardBg = useColorModeValue('whiteAlpha.800', 'whiteAlpha.90');
  const mutedColor = useColorModeValue('gray.600', 'gray.300');
  const borderColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.200');
  const accentGlow = useColorModeValue('rgba(21, 101, 192, 0.12)', 'rgba(144, 205, 244, 0.18)');
  const panelBg = useColorModeValue('white', 'whiteAlpha.100');

  return (
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Box
        position="relative"
        overflow="hidden"
        borderRadius="3xl"
        px={{ base: 5, md: 8 }}
        py={{ base: 8, md: 10 }}
        bg={cardBg}
        border="1px solid"
        borderColor={borderColor}
        boxShadow={`0 24px 60px ${accentGlow}`}
      >
        <Box
          position="absolute"
          top="-60px"
          right="-40px"
          h="180px"
          w="180px"
          borderRadius="full"
          bgGradient="linear(to-br, blue.300, cyan.200)"
          opacity={0.18}
          filter="blur(10px)"
        />

        <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: 8, lg: 12 }} align="center">
          <MotionBox
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            position="relative"
            flexShrink={0}
          >
            <Box
              position="absolute"
              inset="-10px"
              borderRadius="36px"
              bgGradient="linear(to-br, blue.400, cyan.300)"
              opacity={0.25}
              filter="blur(20px)"
            />
            <Image
              src="/asset/miley_face.png"
              alt="Micheal Sokoya"
              borderRadius="32px"
              boxSize={{ base: '220px', md: '280px' }}
              objectFit="cover"
              position="relative"
              zIndex={1}
              border="1px solid"
              borderColor={borderColor}
            />
          </MotionBox>

          <VStack align="start" spacing={6} flex={1}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.15 }}
            >
              <VStack align="start" spacing={3}>
                <Badge colorScheme="blue" borderRadius="full" px={3} py={1}>
                  Lagos-based Full Stack Engineer
                </Badge>
                <Heading as="h2" size="xl">
                  About Me
                </Heading>
                <Text color={mutedColor} maxW="2xl" fontSize={{ base: 'md', md: 'lg' }}>
                  I build modern web and mobile products with a strong bias for clean architecture,
                  thoughtful user experience, and shipping reliable systems that feel good to use.
                </Text>
              </VStack>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.25 }}
            >
              <VStack align="start" spacing={4}>
                <Text color={mutedColor}>
                  My core strengths span .NET, ASP.NET Core, Node.js, React, and cloud delivery on
                  Azure and AWS. I enjoy translating sharp product ideas into polished experiences
                  that stay maintainable as they grow.
                </Text>
                <Text color={mutedColor}>
                  The work I care about most sits at the intersection of engineering depth and
                  product clarity: fast interfaces, dependable backends, and solutions that solve
                  real problems instead of just looking impressive in screenshots.
                </Text>
              </VStack>
            </motion.div>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} w="full">
              {highlights.map((item, index) => (
                <MotionBox
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.3 + index * 0.08 }}
                  p={4}
                  borderRadius="2xl"
                  bg={panelBg}
                  border="1px solid"
                  borderColor={borderColor}
                >
                  <Text fontSize="2xl" fontWeight="700" color="blue.400">
                    {item.value}
                  </Text>
                  <Text color={mutedColor} fontSize="sm">
                    {item.label}
                  </Text>
                </MotionBox>
              ))}
            </SimpleGrid>

            <HStack spacing={3} flexWrap="wrap">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.35 + index * 0.06 }}
                  whileHover={{ y: -3, scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <IconButton
                    as="a"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    icon={<FontAwesomeIcon icon={link.icon} />}
                    colorScheme={link.colorScheme}
                    size="lg"
                    variant="ghost"
                    borderRadius="full"
                    bg={panelBg}
                    _hover={{ bg: useColorModeValue('gray.100', 'whiteAlpha.200') }}
                  />
                </motion.div>
              ))}
            </HStack>
          </VStack>
        </Stack>
      </Box>
    </MotionBox>
  );
}

export default AboutSection;
