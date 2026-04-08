import {
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  HStack,
  IconButton,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faWhatsapp, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

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
    href: 'https://www.instagram.com/mileyyyyy.yy?igsh=YngxeThxaDVxa3Bp&utm_source=qr',
    icon: faInstagram,
    colorScheme: 'pink',
  },
];

function Contact() {
  const form = useRef();
  const cardBg = useColorModeValue('rgba(255,255,255,0.82)', 'rgba(255,255,255,0.05)');
  const borderColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.200');
  const mutedColor = useColorModeValue('gray.600', 'gray.300');
  const iconBg = useColorModeValue('white', 'whiteAlpha.100');
  const iconHover = useColorModeValue('gray.100', 'whiteAlpha.200');

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_8ebwxox',
        'template_du7uxhp',
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => alert('Message sent successfully!'),
        (error) => { alert(`Failed to send message: ${error.text}`); }
      );
  };

  return (
    <MotionBox
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      w="100%"
    >
      <VStack spacing={8} align="start" w="100%">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
        >
          <VStack align="start" spacing={3}>
            <Heading as="h2" size="xl">Contact Me</Heading>
            <Text color={mutedColor} maxW="xl">
              Let&apos;s talk about a product, a collaboration, or an idea that needs a thoughtful build.
            </Text>
          </VStack>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.16 }}
        >
          <HStack spacing={3} flexWrap="wrap">
            {socialLinks.map((link) => (
              <motion.div key={link.label} whileHover={{ y: -3, scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                <IconButton
                  as="a"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  icon={<FontAwesomeIcon icon={link.icon} />}
                  colorScheme={link.colorScheme}
                  size="md"
                  variant="ghost"
                  bg={iconBg}
                  _hover={{ bg: iconHover }}
                  borderRadius="full"
                />
              </motion.div>
            ))}
          </HStack>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.24 }}
          style={{ width: '100%' }}
        >
          <VStack
            as="form"
            ref={form}
            onSubmit={sendEmail}
            spacing={6}
            align="start"
            w="100%"
            p={{ base: 5, md: 8 }}
            borderRadius="3xl"
            bg={cardBg}
            border="1px solid"
            borderColor={borderColor}
          >
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input name="name" placeholder="Your Name" required />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input name="email" type="email" placeholder="Your Email" required />
            </FormControl>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea name="message" placeholder="Your Message" required minH="160px" />
            </FormControl>
            <HStack spacing={3}>
              <Button type="submit" variant="outline" colorScheme="primary" borderRadius="3xl">
                Send Message
              </Button>
              <Button as={Link} to="/" variant="ghost" colorScheme="primary" borderRadius="3xl">
                Back Home
              </Button>
            </HStack>
          </VStack>
        </motion.div>
      </VStack>
    </MotionBox>
  );
}

export default Contact;
