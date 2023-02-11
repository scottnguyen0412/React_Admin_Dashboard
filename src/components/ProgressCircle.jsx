import {Box, useTheme,} from '@mui/material';
import { colorTokens } from '../theme';

const ProgressCircle = ({progress = "0.75", size = "40" }) => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    const angle = progress * 360;

    return (
        <Box sx={{
            background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
        
                // tạo ra một hình ảnh bao gồm một dải màu với các hiệu ứng chuyển màu được xoay quanh một điểm trung tâm
                conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
                ${colors.greenAccent[500]}`,
                borderRadius: "50%",
                width: `${size}px`,
                height: `${size}px`,
            }}/>
    )
}

export default ProgressCircle;