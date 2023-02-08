import {Box, Typography, useTheme} from '@mui/material';
import { colorTokens } from '../theme';

//truyền 2 tham số là title và subtitle
const Header = ({title, subTitle}) => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);
    return <Box>
            <Typography variant="h2" color={colors.grey[100]} 
                    fontWeight="bold" sx={{mb: "5px"}}>{title}</Typography>
            
            <Typography variant="h5" 
                color={colors.greenAccent[400]}>{subTitle}</Typography>

        </Box>
};

export default Header;
