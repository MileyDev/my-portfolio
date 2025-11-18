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
            I'm from Lagos, Nigeria. A full-stack developer passionate about building modern web and mobile applications. I'm convinced that I do pretty well in
            .NET, ASP.Net Core, React, while making use of cloud services like Azure, AWS and more that I don't want to put here :) I obssess about creating world-class applications,
            dynamically smooth UIs and solving real-world problems.
             Some of my key projects are Voxa, Cardora NG, Urban Era clothing store below.
          </Text>
        </Flex>
      </VStack>
    </MotionBox>
  );
}

export default AboutSection;