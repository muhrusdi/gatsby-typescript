import styled from "styled-components";

const Container = styled.div(
  ({ gutter = 16 }) => ({
    padding: `0 ${gutter}px`,
  }),
  ({ type }) => {
    switch (type) {
    case "xl": {
      return {
        maxWidth: 1200,
      };
    }
    case "lg": {
      return {
        maxWidth: 992,
      };
    }
    case "md": {
      return {
        maxWidth: 867,
      };
    }
    case "sm": {
      return {
        maxWidth: 576,
      };
    }
    default:
      return {
        maxWidth: "initial",
      };
    }
  },
);

export default Container;
