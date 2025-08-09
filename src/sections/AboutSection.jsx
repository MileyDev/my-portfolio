import { Box, Heading, Text, VStack, Image, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

function AboutSection() {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <VStack spacing={6} align="start">
        <Heading as="h2" size="xl">
          About Me
        </Heading>
        <Flex direction={{ base: 'column', md: 'row' }} gap={6}>
          <Image
            src="/asset/mileyimg.png"
            alt="Profile"
            borderRadius="full"
            boxSize="150px"
            objectFit="cover"
          />
          <Text>
            I'm Micheal from Lagos, Nigeria. A full-stack developer passionate about building modern web apps. I specialize in
            .NET, React, and Azure, with projects like Quizzer and MoneyWise. I obssess about creating intuitive,
            accessible UIs and solving real-world problems.
          </Text>
        </Flex>
      </VStack>
    </MotionBox>
  );
}

export default AboutSection;