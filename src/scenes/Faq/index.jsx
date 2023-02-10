import {Box, useTheme, Typography} from '@mui/material';
import Header from '../../components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import { colorTokens } from '../../theme';


const FAQ = () => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    return <Box m="20px">
        <Header title="FAQ" subTitle="Frequently Asked Question"/>
        <Box mt="20px">
        <Accordion defaultExpanded>
            <AccordionSummary
            expandIcon={<ExpandCircleDownOutlinedIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography color={colors.greenAccent[500]} variant="h5">An important question</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
            </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
            <AccordionSummary
            expandIcon={<ExpandCircleDownOutlinedIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography color={colors.greenAccent[500]} variant="h5">Another important question</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
            </AccordionDetails>
      </Accordion>

      <Accordion>
            <AccordionSummary
            expandIcon={<ExpandCircleDownOutlinedIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography color={colors.greenAccent[500]} variant="h5">Your important question</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
            </AccordionDetails>
      </Accordion>

      <Accordion>
            <AccordionSummary
            expandIcon={<ExpandCircleDownOutlinedIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography color={colors.greenAccent[500]} variant="h5">Some Random question</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
            </AccordionDetails>
      </Accordion>

      <Accordion>
            <AccordionSummary
            expandIcon={<ExpandCircleDownOutlinedIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography color={colors.greenAccent[500]} variant="h5">Final Question</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
            </AccordionDetails>
      </Accordion>
      </Box>
    </Box>
};

export default FAQ;