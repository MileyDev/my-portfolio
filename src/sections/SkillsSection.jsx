import {
  Box,
  Heading,
  VStack,
  Wrap,
  WrapItem,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  HStack,
  Progress,
  Tooltip,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  SiDotnet,
  SiReact,
  SiChakraui,
  SiJavascript,
  SiHtml5,
  SiGit,
  SiBlazor,
  SiHeroku,
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { TfiMicrosoft } from 'react-icons/tfi';
import { TbBrandCSharp, TbBrandXamarin, TbBrandNextjs, TbBrandNodejs } from 'react-icons/tb';
import { FaAws } from 'react-icons/fa6';

const MotionBox = motion(Box);

const skillCategories = [
  {
    category: 'Frontend',
    color: 'blue',
    summary: 'Interfaces that feel fast, polished, and easy to navigate.',
    skills: [
      { name: 'React', level: 90, icon: SiReact },
      { name: 'Chakra UI', level: 85, icon: SiChakraui },
      { name: 'NextJS', level: 83, icon: TbBrandNextjs },
      { name: 'HTML/CSS', level: 95, icon: SiHtml5 },
      { name: 'JavaScript', level: 88, icon: SiJavascript },
    ],
  },
  {
    category: 'Backend & .NET',
    color: 'purple',
    summary: 'Reliable APIs, domain logic, and maintainable application structure.',
    skills: [
      { name: '.NET', level: 92, icon: SiDotnet },
      { name: 'C#', level: 90, icon: TbBrandCSharp },
      { name: 'Blazor', level: 82, icon: SiBlazor },
      { name: 'NodeJs', level: 86, icon: TbBrandNodejs },
      { name: 'MAUI', level: 80, icon: TbBrandXamarin },
    ],
  },
  {
    category: 'Tools & DevOps',
    color: 'green',
    summary: 'Delivery workflows, cloud platforms, and daily engineering tooling.',
    skills: [
      { name: 'Azure', level: 84, icon: VscAzure },
      { name: 'Git', level: 90, icon: SiGit },
      { name: 'AWS', level: 75, icon: FaAws },
      { name: 'SQL', level: 82, icon: TfiMicrosoft },
      { name: 'Heroku', level: 90, icon: SiHeroku },
    ],
  },
];

function SkillsSection() {
  const cardBg = useColorModeValue('whiteAlpha.800', 'whiteAlpha.90');
  const subtleBg = useColorModeValue('white', 'whiteAlpha.80');
  const borderColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.200');
  const mutedColor = useColorModeValue('gray.600', 'gray.300');
  const haloColor = useColorModeValue('rgba(255,255,255,0.8)', 'rgba(255,255,255,0.06)');

  return (
    <VStack spacing={8} align="start" py={10}>
      <MotionBox
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
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
              bgGradient: 'linear(to-r, teal.400, green.400)',
              borderRadius: 'full',
            }}
          >
            Skills
          </Heading>
          <Text color={mutedColor} maxW="2xl">
            My toolkit covers interface craft, backend engineering, and the cloud workflow needed
            to ship products smoothly from prototype to production.
          </Text>
        </VStack>
      </MotionBox>

      <SimpleGrid columns={{ base: 1, xl: 3 }} spacing={6} w="full">
        {skillCategories.map((group, groupIndex) => (
          <MotionBox
            key={group.category}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: groupIndex * 0.12 }}
            p={6}
            borderRadius="3xl"
            bg={cardBg}
            border="1px solid"
            borderColor={borderColor}
            boxShadow="lg"
          >
            <VStack align="start" spacing={5}>
              <VStack align="start" spacing={2}>
                <HStack spacing={3}>
                  <Box
                    h="12px"
                    w="12px"
                    borderRadius="full"
                    bg={`${group.color}.400`}
                    boxShadow={`0 0 0 6px ${haloColor}`}
                  />
                  <Text fontWeight="700" fontSize="lg">
                    {group.category}
                  </Text>
                </HStack>
                <Text color={mutedColor} fontSize="sm">
                  {group.summary}
                </Text>
              </VStack>

              <Wrap spacing={3}>
                {group.skills.map((skill, index) => (
                  <WrapItem key={skill.name}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: 0.12 + index * 0.05 }}
                      whileHover={{ y: -3, scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Tooltip
                        label={
                          <VStack align="start" spacing={2} p={1}>
                            <Text fontWeight="700">{skill.name}</Text>
                            <Progress
                              value={skill.level}
                              size="sm"
                              width="120px"
                              colorScheme={group.color}
                              borderRadius="full"
                            />
                            <Text fontSize="xs">{skill.level}% proficiency</Text>
                          </VStack>
                        }
                        hasArrow
                        placement="top"
                        bg="gray.700"
                        color="white"
                      >
                        <Tag
                          size="lg"
                          px={4}
                          py={2}
                          borderRadius="full"
                          variant="subtle"
                          colorScheme={group.color}
                          bg={subtleBg}
                          border="1px solid"
                          borderColor={borderColor}
                          boxShadow="sm"
                        >
                          {skill.icon && <TagLeftIcon as={skill.icon} boxSize="16px" />}
                          <TagLabel>{skill.name}</TagLabel>
                        </Tag>
                      </Tooltip>
                    </motion.div>
                  </WrapItem>
                ))}
              </Wrap>

              <VStack align="start" spacing={3} w="full">
                {group.skills.slice(0, 3).map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.06 }}
                    style={{ width: '100%' }}
                  >
                    <VStack align="start" spacing={1} w="full">
                      <HStack justify="space-between" w="full">
                        <Text fontSize="sm" fontWeight="600">
                          {skill.name}
                        </Text>
                        <Text fontSize="xs" color={mutedColor}>
                          {skill.level}%
                        </Text>
                      </HStack>
                      <Progress
                        value={skill.level}
                        size="sm"
                        borderRadius="full"
                        colorScheme={group.color}
                        w="full"
                      />
                    </VStack>
                  </motion.div>
                ))}
              </VStack>
            </VStack>
          </MotionBox>
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default SkillsSection;
