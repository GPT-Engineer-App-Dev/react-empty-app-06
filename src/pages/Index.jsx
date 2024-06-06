import { Box, Container, Flex, Heading, Link, Spacer, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.lg">
      <Flex as="nav" bg="blue.500" color="white" padding={4} alignItems="center">
        <Heading as="h1" size="lg">
          <Link as={RouterLink} to="/" color="white" _hover={{ textDecoration: "none" }}>
            MyApp
          </Link>
        </Heading>
        <Spacer />
        <Box>
          <Link as={RouterLink} to="/" margin={2} color="white" _hover={{ textDecoration: "none" }}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" margin={2} color="white" _hover={{ textDecoration: "none" }}>
            About
          </Link>
        </Box>
      </Flex>
      <Container centerContent maxW="container.md" height="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to MyApp</Text>
          <Text>This is a clean and minimalistic React application.</Text>
        </VStack>
      </Container>
    </Container>
  );
};

export default Index;