import { Box, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button, HStack, IconButton } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

const MotionBox = motion(Box);

function Contact() {
    const form = useRef();

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
                (error) => { alert('Failed to send message: ' + error.text) }
            );
    };

    return (
        <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            w="100%"
        >
            <VStack spacing={8} align="start" w="100%">
                <Heading as="h2" size="xl">Contact Me</Heading>
                
                <HStack spacing={4}>
                    <IconButton
                        as="a"
                        href="https://www.linkedin.com/in/micheal-sokoya-4a3307364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" // Replace with your LinkedIn URL
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        icon={<FontAwesomeIcon icon={faLinkedin} />}
                        colorScheme="linkedin"
                        size="md"
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
                        size="md"
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
                        size="md"
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
                        size="md"
                        variant="ghost"
                        _hover={{ bg: 'pink.100' }}
                    />
                </HStack>
                {/* Contact Form */}
                <VStack as="form" ref={form} onSubmit={sendEmail} spacing={6} align="start" w="100%">
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
                        <Textarea name="message" placeholder="Your Message" required />
                    </FormControl>
                    <Button type="submit" variant="outline" colorScheme="primary">Send Message</Button>
                </VStack>
                <Button as={Link} to="/" variant="outline" colorScheme="primary" mr={2}>Back Home</Button>
            </VStack>
        </MotionBox>
    );
}

export default Contact;