import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import {
  DateSelectArg,
  EventApi,
  EventClickArg,
  formatDate,
} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { useState } from 'react';
import { appPalette } from '../theme';

export const Events = () => {
  const isWideScreen = useMediaQuery('(min-width: 1000px)');
  const theme = useTheme();
  const colors = appPalette(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

  const handleDateClick = (selected: DateSelectArg) => {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.startStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected: EventClickArg) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box
      component='article'
      display='flex'
      alignItems={'center'}
      px={isWideScreen ? 3 : 1}
      width='100%'
      height='100%'
    >
      {/* CALENDAR SIDEBAR */}
      {/*<Box
        sx={{
          flex: '1 1 20%',
          backgroundColor: colors.primary[400],
        }}
        p={2}
        borderRadius='4px'
      >
        <Typography variant='h5'>Events</Typography>
        <List>
          {currentEvents.map((event) => (
            <ListItem
              key={event.id}
              sx={{
                backgroundColor: colors.primaryAccent[500],
                margin: '7.5px 0',
                borderRadius: '2px',
              }}
            >
              <ListItemText
                primary={event.title}
                secondary={
                  <Typography>
                    {formatDate(event.start!, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>*/}

      {/* CALENDAR */}

      <Box flex='1 1 100%' mx={2}>
        <FullCalendar
          height='75vh'
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin,
          ]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
          }}
          initialView='dayGridMonth'
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          select={handleDateClick}
          eventClick={handleEventClick}
          eventsSet={(events) => setCurrentEvents(events)}
          initialEvents={[
            {
              id: '12315',
              title: 'All-day event',
              date: '2022-09-14',
            },
            {
              id: '5123',
              title: 'Timed event',
              date: '2022-09-28',
            },
          ]}
        />
      </Box>
    </Box>
  );
};
