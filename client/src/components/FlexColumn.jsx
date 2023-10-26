const { Box } = require("@mui/material");
const { styled } = require("@mui/system");

const FlexColumn = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignContent: "center"
});

export default FlexColumn;