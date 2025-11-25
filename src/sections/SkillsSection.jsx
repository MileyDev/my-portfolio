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
  chakra,
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

// Motion wrapper for tags
const MotionTag = motion(Tag);

// Skill categories 
const skillCategories = [
  {
    category: 'Frontend',
    color: 'blue',
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
    skills: [
      { name: '.NET', level: 92, icon: SiDotnet },
      { name: 'C#', level: 90, icon: TbBrandCSharp },
      { name: 'Blazor', level: 82, icon: SiBlazor },
      { name: 'NodeJs',  level: 86, icon: TbBrandNodejs },
      { name: 'MAUI', level: 80, icon: TbBrandXamarin },
    ],
  },
  {
    category: 'Tools & DevOps',
    color: 'green',
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
  return (
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
          bgGradient: 'linear(to-r, teal.400, green.400)',
          borderRadius: 'full',
        }}
      >
        Skills
      </Heading>

      {/* Render each skill category */}
      {skillCategories.map((group, groupIndex) => {
        const Icon = group.skills[0]?.icon; // Just for animation reference

        return (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: groupIndex * 0.2 }}
            style={{ width: '100%' }}
          >
            <VStack align="start" spacing={4}>
              {/* Category Header */}
              <HStack align="center" w="full">
                <Text fontWeight="bold" fontSize="lg" color={`${group.color}.300`}>
                  {group.category}
                </Text>
                <chakra.div
                  flex={1}
                  height="1px"
                  bgGradient={`linear(to-r, ${group.color}.400, transparent)`}
                  opacity={0.3}
                  ml={2}
                />
              </HStack>

              {/* Skill Tags */}
              <Wrap spacing={{ base: 3, md: 4 }}>
                {group.skills.map((skill, index) => {
                  const delay = index * 0.05;

                  return (
                    <WrapItem key={skill.name}>
                      <MotionTag
                        size="lg"
                        variant="subtle"
                        colorScheme={group.color}
                        borderRadius="full"
                        px={4}
                        py={2}
                        cursor="default"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay }}
                        whileHover={{
                          scale: 1.15,
                          shadow: 'lg',
                          borderColor: `${group.color}.400`,
                        }}
                        whileTap={{ scale: 0.95 }}
                        boxShadow="md"
                        border="1px solid"
                        borderColor="transparent"
                        backdropFilter="blur(8px)"
                        bg={`${group.color}.50`}
                      >
                        <Tooltip
                          label={
                            <VStack align="start" spacing={1} p={2}>
                              <Text fontWeight="bold">{skill.name}</Text>
                              <Progress
                                value={skill.level}
                                size="sm"
                                width="100px"
                                colorScheme={group.color}
                                borderRadius="full"
                              />
                              <Text fontSize="xs">{skill.level}% Proficiency</Text>
                            </VStack>
                          }
                          hasArrow
                          placement="top"
                          bg="gray.700"
                          color="white"
                        >
                          <HStack spacing={2}>
                            {skill.icon && <TagLeftIcon as={skill.icon} boxSize="16px" />}
                            <TagLabel fontWeight="medium">{skill.name}</TagLabel>
                          </HStack>
                        </Tooltip>
                      </MotionTag>
                    </WrapItem>
                  );
                })}
              </Wrap>
            </VStack>
          </motion.div>
        );
      })}
    </VStack>
  );
}

export default SkillsSection;