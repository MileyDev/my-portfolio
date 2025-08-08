import { Box, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

function Contact() {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <VStack spacing={6} align="start">
        <Heading as="h2" size="xl">
          Contact Me
        </Heading>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Your Name" />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Your Email" />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Your Message" />
        </FormControl>
        <Button colorScheme="primary">Send Message</Button>
      </VStack>
    </MotionBox>
  );
}

export default Contact;