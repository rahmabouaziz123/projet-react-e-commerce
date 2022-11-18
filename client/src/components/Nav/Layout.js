
// import { Content } from "./Content.js"

// import { ListProduct } from "../listProduct/ListProduct.jsx";

import { Box } from "./Box.js";

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
    {/* <Content /> */}
    {/* <ListProduct/> */}
    
    
  </Box>
);