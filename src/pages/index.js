import { Box, Typography } from "@mui/material";
import { Bold } from "../utilities";

const style = {
  name:{
    fontFamily:Bold,
    fontSize:"16px",
  },
  container:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
  }
}
export default function Home() {
  return (
     <Box sx={style?.container}>
      <Typography sx={style?.name}>Boliler Plate</Typography>
     </Box>
  )
}
