import { QuestionIcon } from "@chakra-ui/icons";
import {Flex, Text } from "@chakra-ui/react";
import SidebarHelpImage from "assets/img/SidebarHelpImage.png";
import IconBox from "components/Icons/IconBox";
import React from "react";

export function SidebarHelp(props) {
  // Pass the computed styles into the `__css` prop
  const { children, ...rest } = props;
  return (
    <Flex
      borderRadius='15px'
      flexDirection='column'
      bgImage={SidebarHelpImage}
      bgSize='cover'
      bgPosition='center'
      justifyContent='flex-start'
      alignItems='start'
      p='16px'
      minH='170px'
      minW='218px'>
      <IconBox width='35px' h='35px' bg='white' mb='auto'>
        <QuestionIcon color='brand.200' h='18px' w='18px' />
      </IconBox>
      <Text fontSize='sm' color='white' fontWeight='bold'>
        Need a comparaisation between two web sites ?
      </Text>
      <Text fontSize='s' color='green' mb='18px'>
       Please SignUp
      </Text>
      
    </Flex>
  );
}
