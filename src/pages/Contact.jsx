import { Box, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const MotionBox = motion(Box);

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_8ebwxox',       // Replace with your EmailJS Service ID
            'template_du7uxhp',      // Replace with your EmailJS Template ID
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY  // Use environment variable for Public Key
        )
            .then(() => alert('Message sent successfully!'),
                (error) => alert('Failed to send message: ' + error.text));
    };

    return (
        <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <VStack as="form" ref={form} onSubmit={sendEmail} spacing={6} align="start" w="100%">
                <Heading as="h2" size="xl">Contact Me</Heading>
                <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input name="user_name" placeholder="Your Name" required />
                </FormControl>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input name="user_email" type="email" placeholder="Your Email" required />
                </FormControl>
                <FormControl>
                    <FormLabel>Message</FormLabel>
                    <Textarea name="message" placeholder="Your Message" required />
                </FormControl>
                <Button type="submit" colorScheme="primary">Send Message</Button>
            </VStack>
        </MotionBox>
    );
}

export default Contact;