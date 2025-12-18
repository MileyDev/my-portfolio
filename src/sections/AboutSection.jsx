import { Box, Heading, Text, VStack, Image, Spacer, HStack, IconButton } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faWhatsapp, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
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

        <Spacer />

        <HStack spacing={4} align="stretch">
          <IconButton
            as="a"
            href=""
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X formerly Twitter"
            icon={<FontAwesomeIcon icon={faXTwitter} />}
            colorScheme="gray"
            size="lg"
            variant="ghost"
            _hover={{ bg: 'gray.100' }}
          />
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/micheal-sokoya-4a3307364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            icon={<FontAwesomeIcon icon={faLinkedin} />}
            colorScheme="linkedin"
            size="lg"
            variant="ghost"
            _hover={{ bg: 'linkedin.100' }}
          />
          <IconButton
            as="a"
            href="https://github.com/MileyDev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            icon={<FontAwesomeIcon icon={faGithub} />}
            colorScheme="gray"
            size="lg"
            variant="ghost"
            _hover={{ bg: 'gray.100' }}
          />
          <IconButton
            as="a"
            href="https://wa.me/+2348065154550"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            icon={<FontAwesomeIcon icon={faWhatsapp} />}
            colorScheme="whatsapp"
            size="lg"
            variant="ghost"
            _hover={{ bg: 'whatsapp.100' }}
          />
          <IconButton
            as="a"
            href="https://www.instagram.com/mmmmmileyyyyyyyyyyyyyy?igsh=MTVvOWtrM3M5MXdqZQ=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            icon={<FontAwesomeIcon icon={faInstagram} />}
            colorScheme="pink"
            size="lg"
            variant="ghost"
            _hover={{ bg: 'pink.100' }}
          />
        </HStack>

      </VStack>
    </MotionBox>
  );
}

export default AboutSection;