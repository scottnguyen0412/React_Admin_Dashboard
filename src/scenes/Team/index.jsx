import {Box, Typography, useTheme} from '@mui/material';
import {DataGrid} from '@mui/x-data-grid'; 

import { colorTokens } from '../../theme';
import {fakeDataTeam} from '../../data/fakeData';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from '../../components/Header';


const TeamPage = () => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    const columns = [{field: "id", headerName: "ID"}, 
                        {field:"name", headerName: "Name", flex:1, cellClassName: "name-column--cell"},
                        {field:"email", headerName: "Email", flex:1},
                        {field:"age", headerName:"Age", type:"number", headerAlign: "left", align:"left"}, 
                        {field:"phone", headerName:"Phone", flex:1},
                        {field:"access", headerName:"Access Level", 
                        flex:1, 
                        // Customize to this "access"
                        renderCell: ({row:{access}}) => {
                            return (
                                <Box width="60%" m="0 auto" p="5px" display="flex" 
                                    justifyContent="center" 
                                    backgroundColor={
                                        // Background color sẽ thay đổi tuỳ thuộc vào access
                                        access === "admin"
                                            ? colors.greenAccent[600]:colors.greenAccent[700]
                                    }
                                    borderRadius="4px"
                                    >
                                    {/* nếu access là admin thì sẽ hiển thị icon "adminpannel" */}
                                    {access === "admin" && <AdminPanelSettingsIcon/>}

                                    {/* nếu access là manager thì sẽ hiển thị icon "security"*/}
                                    {access === "manager" && <SecurityOutlinedIcon/>}

                                    {/* nếu access là user thì sẽ hiển thị icon "lockopen"*/}
                                    {access === "user" && <LockOpenOutlinedIcon/>}
                                    <Typography color={colors.grey[100]} sx={{ml: "5px"}}>
                                        {access}
                                    </Typography>
                                </Box>
                            );
                        }
                        }
                    ];

    return (<Box m="20px">
                <Header title="Team Page" subTitle="Managing the team Member"/>
                <Box m="40px 0 0 0"
                    height="75vh"
                >
                    <DataGrid 
                         rows={fakeDataTeam}
                         columns = {columns}
                    />
                </Box>
            </Box>
    );
};

export default TeamPage;