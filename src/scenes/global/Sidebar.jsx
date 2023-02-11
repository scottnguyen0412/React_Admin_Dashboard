import { useState } from "react";
import {ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {Box, IconButton, Typography, useTheme} from '@mui/material';
import {Link} from 'react-router-dom';
import { colorTokens } from "../../theme";

import HomeOutlined from "@mui/icons-material/HomeOutlined";
import PeopleOutlined from "@mui/icons-material/PeopleOutlined";
import ContactsOutlined from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlined from "@mui/icons-material/ReceiptOutlined";
import PersonOutlined from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlined from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlined from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlined from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlined from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlined from "@mui/icons-material/TimelineOutlined";
import MenuOutlined from "@mui/icons-material/MenuOutlined";
import MapOutlined from "@mui/icons-material/MapOutlined";

//Put global parameter to display when click item. 
const Item = ({title, to, icon, selected, setSelected})=>{
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);
    return (
        <MenuItem active={selected === title} style={{color: colors.grey[100]}}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>
                {title}
            </Typography>
            <Link to={to}/>
        </MenuItem>
    ) 
}

const Sidebar = () => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode); //give colors

    //Sidebar có bị thu gọn hay không
    const[isCollapsed, setIsCollapsed] = useState(false);

    //Mục user đang chọn là đang ở mục nào 
    const[selected, setSelected] = useState('Dashboard');

    return (
        <Box 
            //Overside color pro-sidebar 
            sx={{
                "& .pro-sidebar-inner" : {
                    //overide color background sidebar
                    background: `${colors.primary[400]} !important`,
                },

                "& .pro-icon-wrapper" : {
                    backgroundColor: "transparent !important"
                },
                "& .pro-inner-item" : {
                    padding: "5px 35px 5px 20px !important"
                },
                "& .pro-inner-item:hover" : {
                    color: "#f6b93b !important"
                },
                //Change color when item actived
                "& .pro-menu-item.active" : {
                    color: "#f6b93b !important"
                },
                
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* Khi click thì sẽ cập nhật giá trị thành uncollapsed(không được thu gọn) */}
                    <MenuItem onClick={() => setIsCollapsed(!isCollapsed)}
                        //ìf collapsed then display "Menu icon otherwise then set it underfined" 
                        icon={isCollapsed? <MenuOutlined/> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}>
                        {!isCollapsed && (
                            <Box display="flex" justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h3" color={colors.grey[100]}>
                                    ADMIN
                                </Typography>
                                
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlined/>
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>
                    
                    {/* user when not Collapsed*/}
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img alt="avatar-user" width="100px" height="100px"
                                    src={`../../assets/avatar/user.png`}
                                    style={{cursor:"pointer", borderRadius:"50%"}}
                                />
                            </Box>

                            <Box textAlign="center">
                                <Typography variant="h2" 
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{m: "10px 0 0 0"}}
                                    >
                                    Scott Nguyen
                                </Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>VIP Admin</Typography>
                            </Box>
                        </Box>
                    )}

                    {/* Menu item */}
                    {/* if it uncolla[sed then get paddingLeft= 10%] */}
                    <Box paddingLeft={isCollapsed ? undefined: "10%"}>
                        <Item
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography variant="h6" color={colors.grey[300]}
                            sx={{ m:"15px 0 5px 20px"}}
                        >
                        Data</Typography>
                        <Item
                            title="Manage Team"
                            to="/team"
                            icon={<PeopleOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Contacts"
                            to="/contacts"
                            icon={<ContactsOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Invoices Balances"
                            to="/invoices"
                            icon={<ReceiptOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography variant="h6" color={colors.grey[300]}
                            sx={{ m:"15px 0 5px 20px"}}
                        >
                        Pages</Typography>
                        <Item
                            title="Profile Form"
                            to="/form"
                            icon={<PersonOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Calendar"
                            to="/calendar"
                            icon={<CalendarTodayOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="FAQ"
                            to="/faq"
                            icon={<HelpOutlineOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography variant="h6" color={colors.grey[300]}
                            sx={{ m:"15px 0 5px 20px"}}
                        >
                        Chart</Typography>
                        <Item
                            title="Bar Chart"
                            to="/bar"
                            icon={<BarChartOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Pie Chart"
                            to="/pie"
                            icon={<PieChartOutlineOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Line Chart"
                            to="/line"
                            icon={<TimelineOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Geography"
                            to="/geography"
                            icon={<MapOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
}

export default Sidebar;