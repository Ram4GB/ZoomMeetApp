import { Box } from "@chakra-ui/layout";
import { Portal } from "@chakra-ui/portal";

const CustomToolbar = () => {
  return (
    <Portal>
      <Box as="div" position="fixed" bgColor="red" right={4} bottom={4}>
        {/* <Box as="div">hello world</Box>
        <Box as="div">hello world</Box>
        <Box as="div">hello world</Box>
        <Box as="div">hello world</Box> */}
      </Box>
    </Portal>
  );
};

export default CustomToolbar;
