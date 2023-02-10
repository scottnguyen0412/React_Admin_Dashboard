import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import {formatDate}  from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from "@fullcalendar/interaction";
import {Box, List, ListItem, ListItemText, Typography, useTheme} from '@mui/material';
import Header from "../../components/Header";
import { colorTokens } from "../../theme";

const Calendar = () => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    const[currentEvents, setCurrentEvents] = useState([]);

    // Xử lí khi user click vào Date calendar để đặt lời nhắc cho một sự kiện bất kì
    const handleDateClick = (selected) => {
        const title = prompt("Please enter title for your event");
        const calendarAPI = selected.view.calendar;
        calendarAPI.unselect();

        // check title exist
        if(title)
        {
            calendarAPI.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay, 
            })
        }
    };

    // handle remove event
    const handleEventClick = (selected) => {
        if(window.confirm(`Are you sure to delete this event? '${selected.event.title}'`))
        {
            selected.event.remove();
        }

    }
    
        return <Box m="20px">
            <Header title="Calendar" subTitle="Full Calendar Interactive Page"/>
            <Box display="flex" justifyContent="space-between">
                {/* Calendar Sidebar */}
                <Box flex="1 1 20%" backgroundColor={colors.primary[400]} p="15px" borderRadius="4px">
                    <Typography variant="h5">Events</Typography>
                    <List>
                        {currentEvents.map((event) => (
                            <ListItem key={event.id}
                                sx={{
                                    backgroundColor: colors.greenAccent[500],
                                    margin: "10px 0 ",
                                    borderRadius: "2px",

                                }}
                            >
                                <ListItemText 
                                    primary={event.title}
                                    // Display day month and year when user set up event
                                    secondary={
                                        <Typography>
                                            {formatDate(event.start, {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        })} 
                                        </Typography>
                                    }
                                    />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/* Calendar  */}
                <Box flex="1 1 100%" ml="15px">
                    <FullCalendar height="75vh" 
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                        headerToolbar={{ left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,listWeek,timeGridDay',}}
                        
                        initialView= 'dayGridMonth'
                        editable = {true}
                        selectable = {true}
                        selectMirror = {true}
                        dayMaxEvents = {true}
                        // Handle date click calendar
                        select={handleDateClick}
                        // handle remove task in date calendar
                        eventClick = {handleEventClick}
                        eventsSet = {(event) => {
                            setCurrentEvents(event)

                        }}
                        initialEvents={[
                            {
                                id:"1234",
                                title: "All-day event",
                                date: "2023-07-02"
                            },
                            {
                                id:"12345",
                                title: "Time event",
                                date: "2023-09-02"
                            }
                        ]}
                        />
                </Box>
            </Box>
        </Box>
}

export default Calendar;