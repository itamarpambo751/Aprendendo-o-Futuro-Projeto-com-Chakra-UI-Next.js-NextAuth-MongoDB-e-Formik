'use client'

import { signIn, useSession } from "next-auth/react"
import { Formik } from "formik"

import { 
  Box, 
  Flex, 
  Heading, 
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Image,
  Textarea
} from "@chakra-ui/react";
import Authenticated from "@/components/authenticated";

export default function Home() {
  const { status } = useSession()

  if (status === 'authenticated') {
    return <Authenticated />
  }

  return (
    <Formik 
      initialValues={{
        first_name: '', 
        last_name: '',
        email: '',
        address: '',
        phone: 0,
        description: ''
      }}
      validate={(values) => {

      }}
      onSubmit={() => {}}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Flex
          minHeight="100vh"
          width="full"
          align="center"
          justifyContent="center"
          background="gray.900"
          bgGradient="linear(to right, #430843 0%, #EA2171 50%, #571157 100%)"
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
              <form autoComplete="off" onSubmit={handleSubmit}>
                <Flex 
                  flexDirection="column"
                  gap=".5rem"
                  marginTop="20px"
                >
                  <Flex gap=".5rem">
                    <FormControl isRequired>
                      <FormLabel 
                        fontWeight="300"
                        fontSize=".9rem"
                      >First name</FormLabel>
                      <Input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.first_name}
                        placeholder="Your First name" 
                        border="none" outline="none" 
                        bgColor="gray.900" 
                        focusBorderColor="gray.600" 
                        color="gray.200" type='text' 
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel 
                        fontWeight="300"
                        fontSize=".9rem"
                      >Last name</FormLabel>
                      <Input 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.last_name} 
                        placeholder="Your last name" 
                        border="none" outline="none" 
                        bgColor="gray.900" 
                        focusBorderColor="gray.600" 
                        color="gray.200" 
                        type='text' 
                      />
                    </FormControl>
                  </Flex>
                  <FormControl isRequired>
                    <FormLabel 
                      fontWeight="300"
                      fontSize=".9rem"
                    >Email address</FormLabel>
                    <Input 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="your email" 
                      border="none" outline="none" 
                      bgColor="gray.900" 
                      focusBorderColor="gray.600" 
                      color="gray.200" 
                      type='email' 
                    />
                  </FormControl>
                  <Flex gap=".5rem">
                    <FormControl isRequired>
                      <FormLabel 
                        fontWeight="300"
                        fontSize=".9rem"
                      >Address</FormLabel>
                      <Input 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.address}
                        placeholder="Your address" 
                        border="none" outline="none" 
                        bgColor="gray.900" 
                        focusBorderColor="gray.600" 
                        color="gray.200" 
                        type='text' 
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel 
                        fontWeight="300"
                        fontSize=".9rem"
                      >Phone</FormLabel>
                      <Input 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                        placeholder="Your phone" 
                        border="none" outline="none" 
                        bgColor="gray.900" 
                        focusBorderColor="gray.600" 
                        color="gray.200" 
                        type='tel' 
                      />
                    </FormControl>
                  </Flex>
                  <FormControl>
                    <FormLabel 
                      fontWeight="300"
                      fontSize=".9rem">Your descript message</FormLabel>
                    <Textarea 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                      placeholder="Your descript message" 
                      border="none" outline="none" 
                      bgColor="gray.900" 
                      focusBorderColor="gray.600" 
                      color="gray.200" 
                      rows={3} 
                      resize="none"
                    />
                  </FormControl>
                  <Button marginTop="15px" bgGradient="linear(to right, #D31671 0%, #F65B99 50%, #D31671 100%)"
                  color="gray.200" _hover={{
                    bgColor: "pink.400"
                  }}>
                    Register
                  </Button>
                  <Button marginTop="15px" bgColor="transparent" color="gray.200" _hover={{
                    bgColor: "#eee",
                    color: "#000"
                  }} onClick={() => signIn('google')}>
                    <Image src="google-logo.png" width="35px" height="35px"/>
                    Signup with Google
                  </Button>
                </Flex>
              </form>
            </Box>
          </Box>
        </Flex>
      )}
    </Formik>
  )
}
