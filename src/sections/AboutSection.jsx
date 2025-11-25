import { Box, Heading, Text, VStack, Image, Spacer } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

function AboutSection() {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <VStack spacing={6} align="center">
        <Heading as="h2" size="xl">
          About Me
        </Heading>

          <Image
            src="/asset/miley_face.png"
            alt="Profile"
            borderRadius="3xl"
            boxSize="250px"
            objectFit="cover" mb={4}
          />
          <Text>
            I'm a full-stack developer based in Lagos, focused on building modern, reliable web and mobile applications.
             My core strengths span .NET, ASP.NET Core, NodeJS and React, supported by hands-on experience with major cloud platforms including Azure and AWS.
          </Text>

          <Spacer />
          
          <Text>
            I'm driven by a commitment to engineering world-class products—clean architectures, seamless user experiences, and solutions that genuinely solve real-world problems.
          </Text>

      </VStack>
    </MotionBox>
  );
}

export default AboutSection;