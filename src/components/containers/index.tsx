import styled from "styled-components";

const Container = styled.div(
  ({ gutter = 16 }) => {
    return {
      padding: `0 ${gutter}px`
    };
  },
  ({ type }) => {
    switch (type) {
      case "lg": {
        return {
          maxWidth: 992
        };
      }
      case "md": {
        return {
          maxWidth: 867
        };
      }
      case "sm": {
        return {
          maxWidth: 576
        };
      }
      default:
        return {
          maxWidth: 1200
        };
    }
  }
);

export default Container;
