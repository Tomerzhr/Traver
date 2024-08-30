import { Pagination } from "@mui/material";
import PropTypes from "prop-types";
import styled from "styled-components";

const GlobalPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  gap: 10px;
`;

export default function GlobalPagination({ cardsPerPage, totalCards, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <GlobalPaginationContainer>
      <Pagination count={pageNumbers.length} onClick={(e) => paginate(e.target.textContent)} />
    </GlobalPaginationContainer>
  );
}

GlobalPagination.propTypes = {
  cardsPerPage: PropTypes.number.isRequired,
  totalCards: PropTypes.number,
  paginate: PropTypes.func.isRequired,
};
