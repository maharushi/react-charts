import React from 'react';
import { Button, HStack } from '@chakra-ui/react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <HStack spacing={4}>
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          colorScheme={currentPage === index + 1 ? 'teal' : 'gray'}
        >
          {index + 1}
        </Button>
      ))}
    </HStack>
  );
};

export default Pagination;
