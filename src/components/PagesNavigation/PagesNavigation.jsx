import { Box } from '../Box/Box';
import { StyledLink } from './PagesNavigation.styled';

export default function PagesNavigation() {
  return (
    <Box as="nav" borderRight="1px solid black" p={4}>
      <StyledLink to="/"> Home </StyledLink>
      <StyledLink to="/movies"> Movies </StyledLink>
    </Box>
  );
}
