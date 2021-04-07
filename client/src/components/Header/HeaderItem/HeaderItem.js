import { Link } from 'react-router-dom';
import { Text } from '@chakra-ui/react';

const HeaderItem = ({ children }) => (
    <Text mt={{ base: 4, md: 0 }} fontSize={18} mr={6} display="block">
      {children}
    </Text>
  );

export default HeaderItem;