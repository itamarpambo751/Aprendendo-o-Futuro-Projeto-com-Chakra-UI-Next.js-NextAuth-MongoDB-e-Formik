import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react"

export default function Authenticated() {
    const { data: session } = useSession()
    return(
        <Flex
            minHeight="100vh"
            width="full"
            justifyContent="center"
            alignItems="center"
        >
            <Box display="flex" flexDirection="column" gap="2rem">
                <Heading>
                    <Text fontSize="2rem" fontWeight="400">My account</Text>
                </Heading>
                <Flex alignItems="center" justifyContent="flex-start" gap="1rem" background="gray.100" padding="50px" borderRadius="10px">
                    <Box width="100px" height="100px" borderRadius="50%" overflow="hidden">
                        <Image src={session.user.image} objectFit="cover" width="100%" height="100%"/>
                    </Box>
                    <Box>
                        <Text fontSize="2rem">{session.user.name}</Text>
                        <Text>{session.user.email}</Text>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    )
}