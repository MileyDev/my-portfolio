import { Box, Heading, Wrap, Tag, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const skills = [
  '.NET',
  'MAUI',
  'Blazor',
  'React',
  'Chakra UI',
  'Azure',
  'JavaScript',
  'C#',
  'HTML/CSS',
  'Git',
  'SQL',
];

function SkillsSection() {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <VStack spacing={6} align="start">
        <Heading as="h2" size="xl">
          Skills
        </Heading>
        <Wrap spacing={3}>
          {skills.map((skill, index) => (
            <Tag
              key={index}
              size="lg"
              variant="solid"
              _hover={{ transform: 'scale(1.1)', transition: 'all 0.2s' }}
            >
              {skill}
            </Tag>
          ))}
        </Wrap>
      </VStack>
    </MotionBox>
  );
}

export default SkillsSection;