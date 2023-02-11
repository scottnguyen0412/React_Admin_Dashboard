import Header from "../../components/Header";
import {Box, Button, IconButton, Typography, useTheme } from "@mui/material"; 
import { colorTokens } from "../../theme";
import { mockTransactions } from "../../data/fakeData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/Barchart";
import GeoChart from "../../components/GeoChart";

import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";



const Dashboard = () => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);
    return <Box m="20px">
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Header title="Dashboard" subTitle="Welcome to Admin Dashboard"/>
                
                    <Box>
                        <Button sx={{backgroundColor: colors.blueAccent[700],
                                        color: colors.grey[100],
                                        fontSize: "14px",
                                        fontWeight: "bold",
                                        padding: "10px 20px"
                        }}>
                            <DownloadOutlinedIcon sx={{mr: "10px"}}/>
                            Download Report
                        </Button>
                    </Box>
                </Box>

                {/* Grid & Chart */}
                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)"
                    gridAutoRows="140px"
                    gap ="20px"
                >
                    {/* Row 1*/}
                    <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" 
                                alignItems="center" justifyContent="center">
                        <StatBox title="20,000" subtitle="Email Sent" progress="0.75" increase="+15%" 
                                    icon={<EmailIcon sx={{color: colors.greenAccent[600], fontSize: "26px" }}/>
                        }/>
                    </Box>
                    <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" 
                                alignItems="center" justifyContent="center">
                        <StatBox title="500,000" subtitle="Sales Obtained" progress="0.50" increase="+21%" 
                                    icon={<PointOfSaleIcon sx={{color: colors.greenAccent[600], fontSize: "26px" }}/>
                        }/>
                    </Box>
                    <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" 
                                alignItems="center" justifyContent="center">
                        <StatBox title="42,250" subtitle="New Clients" progress="0.30" increase="+10%" 
                                    icon={<PersonAddIcon sx={{color: colors.greenAccent[600], fontSize: "26px" }}/>
                        }/>
                    </Box>
                     <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" 
                                alignItems="center" justifyContent="center">
                        <StatBox title="1,123.456" subtitle="Traffic Received" progress="0.80" increase="+43%" 
                                    icon={<TrafficIcon sx={{color: colors.greenAccent[600], fontSize: "26px" }}/>
                        }/>
                    </Box>
                    
                    {/* Row 2 */}
                    <Box 
                    // Chiều rộng chiếm 8cột
                    gridColumn="span 8"
                    // Chiều cao chiếm 2 hàng ngang
                    gridRow="span 2"
                    backgroundColor = {colors.primary[400]}                    
                    >
                        {/*  */}
                        <Box mt="25px" p="0 30px" display="flex" justifyContent="space-between"
                            alignItems="center"
                        >   
                                {/* Chart display on left side */}
                                <Box>
                                    <Typography variant="h5" fontWeight="bold" color={colors.grey[100]}>
                                        Revenue Generated
                                    </Typography>
                                    <Typography variant="h3" fontWeight="500" color={colors.greenAccent[500]}>
                                        $60,000,00
                                    </Typography>
                                </Box>
                                <Box>
                                    <IconButton>
                                        <DownloadOutlinedIcon sx={{fontSize: "26px", color: colors.greenAccent[500]}}/>
                                    </IconButton>
                                </Box>
                            </Box>
                            <Box height="250px" mt="-20px 0 0 0">
                                <LineChart isDashboard={true}/>    
                            </Box>
                            </Box>
                            {/* Transaction */}
                        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} overflow="auto">
                            <Box display="flex" justifyContent="space-between" 
                                alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} 
                                colors={colors.grey[100]}
                                p="15px">
                                    <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                                        Recent Tracsactions
                                    </Typography>
                            </Box>
                            {/* Duyệt mảng truy cập dữ liệu */}
                            {mockTransactions.map((transactions, index) => (
                                <Box key={`${transactions.txId}-${index}`}
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    borderBottom={`4px solid ${colors.primary[500]}`} 
                                    p="15px"
                                >
                                    <Box>
                                        <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">
                                            {transactions.txId}
                                        </Typography>
                                        <Typography color={colors.greenAccent[500]}>
                                            {transactions.user}
                                        </Typography>
                                    </Box>
                                    <Box color={colors.grey[100]}>
                                        {transactions.date}
                                    </Box>
                                    <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">
                                        ${transactions.cost}
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                        {/* Row 3 */}
                        <Box gridColumn="span 4"
                            gridRow="span 2"
                            backgroundColor={colors.primary[400]}
                            p="30px"
                        >
                            <Typography variant="h5" fontWeight="600">
                                Campain
                            </Typography>
                            <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
                                {/* Size meaning width and height truyền đến component progresscircle */}
                                <ProgressCircle size="125"/>
                                <Typography variant="h5" color={colors.greenAccent[500]} sx={{
                                    mt: "15px"
                                }}>
                                    $48,352 revenue generated
                                </Typography>
                                <Typography>Includes extra misc expenditures and costs</Typography>

                            </Box>
                        </Box>

                        <Box gridColumn="span 4"
                            gridRow="span 2"
                            backgroundColor={colors.primary[400]}
                        >
                            <Typography variant="h5" fontWeight="600" sx={{p: "30px 30px 0 30px"}}>
                                Sale Quantity
                            </Typography>
                            <Box height="250px" mt="-20px">
                                <BarChart isDashboard={true}/>
                            </Box>
                        </Box>

                        <Box
                            gridColumn="span 4"
                            gridRow="span 2"
                            backgroundColor={colors.primary[400]}
                            padding="30px"
                            >
                            <Typography
                                variant="h5"
                                fontWeight="600"
                                sx={{ marginBottom: "15px" }}
                            >
                                Geography Based Traffic
                            </Typography>
                            <Box height="200px">
                                <GeoChart isDashboard={true} />
                            </Box>
                        </Box>
                </Box>
            </Box>
}

export default Dashboard;