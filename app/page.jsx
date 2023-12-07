import { 
  Box, 
  Flex, 
  Heading, 
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText, 
  Input,
  Button,
  Image,
  background
} from "@chakra-ui/react";

export default function Home() {
  return (
   <Flex
    minHeight="100vh"
    width="full"
    align="center"
    justifyContent="center"
    background="gray.900"
    color="gray.200"
   >
    <Box
      px={12}
      py={12}
      width="full"
      maxWidth="450px"
      boxShadow="lg"
      background="gray.700"
      borderRadius="6px"
    >
      <Heading>
        <Text fontSize="2rem" fontWeight="400">Signup</Text>
      </Heading>
      <Box>
        <form autoComplete="off">
          <Flex 
            flexDirection="column"
            gap=".5rem"
            marginTop="20px"
          >
            <FormControl isRequired>
              <FormLabel 
                fontWeight="300"
                fontSize=".9rem"
              >First name</FormLabel>
              <Input border="none" outline="none" bgColor="gray.900" focusBorderColor="gray.600" color="gray.200" type='text' />
            </FormControl>
            <FormControl isRequired>
              <FormLabel 
                fontWeight="300"
                fontSize=".9rem"
              >Last name</FormLabel>
              <Input border="none" outline="none" bgColor="gray.900" focusBorderColor="gray.600" color="gray.200" type='text' />
            </FormControl>
            <FormControl isRequired>
              <FormLabel 
                fontWeight="300"
                fontSize=".9rem"
              >Email address</FormLabel>
              <Input border="none" outline="none" bgColor="gray.900" focusBorderColor="gray.600" color="gray.200" type='email' />
            </FormControl>
            <FormControl isRequired>
              <FormLabel 
                fontWeight="300"
                fontSize=".9rem"
              >Address</FormLabel>
              <Input border="none" outline="none" bgColor="gray.900" focusBorderColor="gray.600" color="gray.200" type='text' />
            </FormControl>
            <FormControl isRequired>
              <FormLabel 
                fontWeight="300"
                fontSize=".9rem"
              >Phone</FormLabel>
              <Input border="none" outline="none" bgColor="gray.900" focusBorderColor="gray.600" color="gray.200" type='tel' />
            </FormControl>
            <Button marginTop="15px" bgColor="pink.500" color="gray.200">
              Register
            </Button>
            <Button marginTop="15px" bgColor="transparent" color="gray.200" _hover={{
              bgColor: "#eee",
              color: "#000"
            }}>
              <Image src="google-logo.png" width="35px" height="35px"/>
              Enter with Google
            </Button>
          </Flex>
        </form>
      </Box>
    </Box>
   </Flex>
  )
}
