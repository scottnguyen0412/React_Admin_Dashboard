import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { colorModeContext, colorTokens } from "../../theme";
import {InputBase} from "@mui/material";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {

    const theme = useTheme();
    // allow using color mode
    const colors = colorTokens(theme.palette.mode);
    // Cho phép chuyển đổi trạng thái khác nhau cho color mode
    const colorMode = useContext(colorModeContext);
    
    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            <Box display="flex"
                backgroundColor={colors.primary[400]} 
                borderRadius="3px">
                    <InputBase sx= {{ml:2, flex: 1}} placeholder="Search"/>
                    <IconButton type="button" sx={{p:1}}>
                        <SearchIcon/>
                    </IconButton>
            </Box>
            {/* Icon */}
            <Box display="flex" >
                <IconButton>
                    <NotificationsOutlinedIcon/>
                </IconButton>

                <IconButton>
                    <SettingsOutlinedIcon/>
                </IconButton>

                <IconButton>
                    <PersonOutlinedIcon/>
                </IconButton>

                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeOutlined/>
                    ): (<LightModeOutlined/>)}
                </IconButton>
            </Box>
        </Box>    
    )
};

export default Navbar;