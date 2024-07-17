import { Box, Typography } from "@mui/material";
import { Bold, LocalStorageKeys } from "../utilities";

export default function Login(){
    return(
        <Box>
            <Typography sx={{fontFamily:Bold}} onClick={()=>localStorage.setItem("token", LocalStorageKeys?.token)}>Login</Typography>
        </Box>
    )
}
Login.getLayout = page => (
    <>
      {page}
    </>
  )