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
            I'm Micheal from Lagos, Nigeria. A full-stack developer passionate about building modern web and native mobile applications. I'm well-versed in
            .NET, ASP.Net Core, TypeScript, while making use of cloud services like Azure, AWS etc. I obssess about creating intuitive,
            accessible UIs and solving real-world problems.
             Check out some of my projects like Cardora trading platform, Urban Era clothing store and MoneyWise below.
          </Text>
        </Flex>
      </VStack>
    </MotionBox>
  );
}

export default AboutSection;