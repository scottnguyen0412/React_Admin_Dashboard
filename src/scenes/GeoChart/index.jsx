import {Box, useTheme} from "@mui/material";
import Header from "../../components/Header";
import GeoChart from "../../components/GeoChart";
import { colorTokens } from "../../theme";


const Geography = () => {    
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Header title="Geography Chart Page" subTitle="Simple Geography Chart"/>
            <Box height="75vh" border={`1.5px solid ${colors.grey[100]}`} borderRadius="4px">
                <GeoChart/>
            </Box>

        </Box>
    )
}

export default Geography;