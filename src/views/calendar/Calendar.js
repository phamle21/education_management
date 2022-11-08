import bootstrapPlugin from '@fullcalendar/bootstrap';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import '@fullcalendar/react/dist/vdom';
import timeGridPlugin from '@fullcalendar/timegrid';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Card, Col, Dropdown, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents, setSelectedEvent, updateEvent } from './calendarSlice';
import ModalAddEdit from './components/ModalAddEdit';

const CustomToggle = React.forwardRef(({ onClick }, ref) => (
  <Button
    ref={ref}
    size="sm"
    variant="foreground"
    className="btn-icon btn-icon-only shadow align-top mt-n2"
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    <CsLineIcons icon="more-horizontal" data-cs-size="15" />
  </Button>
));

const colorsMap = [
  { color: 'primary', category: 'Work' },
  { color: 'secondary', category: 'Education' },
  { color: 'tertiary', category: 'Personal' },
];
const CalendarApp = () => {
  const htmlTitle = 'Calendar';
  const htmlDescription = 'Implementation for a basic events and schedule application that built on top of Full Calendar plugin.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'apps', title: 'Apps' },
  ];

  const calendarRef = useRef(null);
  const dispatch = useDispatch();
  const { events: eventsNoColors } = useSelector((state) => state.calendar);
  const { themeValues } = useSelector((state) => state.settings);
  const [events, setEvents] = useState('');
  const [dateTitle, setDateTitle] = useState('');
  const [selectedView, setSelectedView] = useState('dayGridMonth');
  const [isShowModalAddEdit, setIsShowModalAddEdit] = useState(false);

  useEffect(() => {
    const coloredEvents = eventsNoColors.map((event) => {
      const coloredEvent = { ...event };
      if (event.category) {
        const foundColor = colorsMap.find((x) => x.category === event.category);
        if (foundColor) {
          coloredEvent.color = themeValues[foundColor.color];
        }
      }
      return coloredEvent;
    });
    setEvents(coloredEvents);

    return () => { };
  }, [eventsNoColors, themeValues]);

  const onPrevButtonClick = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.prev();
    setDateTitle(calendarApi.view.title);
  };

  const onNextButtonClick = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.next();
    setDateTitle(calendarApi.view.title);
  };
  const onNewEventClick = () => {
    try {
      dispatch(setSelectedEvent({ id: 0, title: 'New Event', start: '', end: '' }));
      setIsShowModalAddEdit(true);
    } catch (e) {
      console.log('This action could not be completed');
    }
  };
  const viewDidMount = ({ view }) => {
    setDateTitle(view.title);
  };
  const changeView = (view) => {
    setSelectedView(view);
    if (calendarRef.current) {
      calendarRef.current.getApi().changeView(view);
    }
  };
  const getToday = () => {
    if (calendarRef.current) {
      calendarRef.current.getApi().today();
    }
  };

  // handlers for user actions
  // ------------------------------------------------------------------------------------------
  const handleDateSelect = (selectInfo) => {
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection
    try {
      dispatch(setSelectedEvent({ id: 0, title: 'New Event', start: selectInfo.startStr, end: selectInfo.endStr }));
      setIsShowModalAddEdit(true);
    } catch (e) {
      console.log('This action could not be completed');
    }
  };

  const handleEventClick = (clickInfo) => {
    const { id, url } = clickInfo.event;
    if (!url) {
      dispatch(setSelectedEvent(events.find((x) => x.id === id)));
      setIsShowModalAddEdit(true);
    }
  };
  // handlers that initiate reads/writes via the 'action' props
  // ------------------------------------------------------------------------------------------

  const handleDates = (rangeInfo) => {
    try {
      dispatch(getEvents(rangeInfo.startStr, rangeInfo.endStr));
    } catch (e) {
      console.log('This action could not be completed');
    }
  };

  const handleEventChange = (changeInfo) => {
    try {
      const event = changeInfo.event.toPlainObject();
      const { id, start, title, end, extendedProps } = event;
      dispatch(updateEvent({ id, start, end, title, category: extendedProps.category, color: extendedProps.color }));
    } catch (e) {
      console.log('This action could not be completed');
      changeInfo.revert();
    }
  };

  const renderEventContent = (eventInfo) => {
    const { timeText, backgroundColor, borderColor } = eventInfo;
    const { allDay, title } = eventInfo.event;
    if (!allDay) {
      return (
        <>
          <div className="fc-daygrid-event-dot" style={{ backgroundColor, borderColor }} />
          <div className="fc-event-time">{timeText}</div>
          <div className="fc-event-title">{title}</div>
        </>
      );
    }
    return (
      <>
        <div className="fc-event-main-frame">
          <div className="fc-event-title-container">
            <div className="fc-event-title fc-sticky">{title}</div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <HtmlHead title={htmlTitle} description={htmlDescription} />

      {/* Title Start */}
      <div className="page-title-container">
        <Row className="g-0">
          <Col xs="auto" className="mb-2 mb-md-0 me-auto">
            <div className="w-auto sw-md-30">
              <h1 className="mb-0 pb-0 display-4">{htmlTitle}</h1>
              <BreadcrumbList items={breadcrumbs} />
            </div>
          </Col>
          <div className="w-100 d-md-none" />
          <Col xs="auto" className="d-flex align-items-start justify-content-end">
            <Button variant="outline-primary" className="btn-icon btn-icon-only ms-1" onClick={onPrevButtonClick}>
              <CsLineIcons icon="chevron-left" />
            </Button>
            <Button variant="outline-primary" className="btn-icon btn-icon-only ms-1" onClick={onNextButtonClick}>
              <CsLineIcons icon="chevron-right" />
            </Button>
          </Col>
          <Col md="auto" className="d-flex align-items-start justify-content-end">
            <Button variant="outline-primary" className="btn-icon btn-icon-start ms-1 w-100 w-md-auto" onClick={onNewEventClick}>
              <CsLineIcons icon="plus" /> <span>Add Event</span>
            </Button>
          </Col>
        </Row>
      </div>
      {/* Title End */}
      {/* Calendar Title Start */}
      <div className="d-flex justify-content-between">
        <h2 className="small-title">{dateTitle}</h2>
        <Dropdown>
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" />
          <Dropdown.Menu
            className="super-colors shadow dropdown-menu-end"
            popperConfig={{
              modifiers: [
                {
                  name: 'offset',
                  options: {
                    offset: [0, 5],
                  },
                },
                {
                  name: 'computeStyles',
                  options: {
                    gpuAcceleration: false,
                  },
                },
              ],
            }}
          >
            <Dropdown.Item eventKey="dayGridMonth" active={selectedView === 'dayGridMonth'} onClick={() => changeView('dayGridMonth')}>
              Month
            </Dropdown.Item>
            <Dropdown.Item eventKey="timeGridWeek" active={selectedView === 'timeGridWeek'} onClick={() => changeView('timeGridWeek')}>
              Week
            </Dropdown.Item>
            <Dropdown.Item eventKey="timeGridDay" active={selectedView === 'timeGridDay'} onClick={() => changeView('timeGridDay')}>
              Day
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="today" onClick={getToday}>
              Today
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      {/* Calendar Title End */}

      <Card body>
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, bootstrapPlugin]}
          headerToolbar={false}
          initialView="dayGridMonth"
          themeSystem="bootstrap"
          editable
          selectable
          selectMirror
          dayMaxEvents
          weekends
          datesSet={handleDates}
          select={handleDateSelect}
          events={events}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          eventChange={handleEventChange} // called for drag-n-drop/resize
          viewDidMount={viewDidMount}
          eventTimeFormat={{
            hour: '2-digit',
            minute: '2-digit',
            meridiem: false,
          }}
        />
      </Card>
      {isShowModalAddEdit && (
        <ModalAddEdit
          show={isShowModalAddEdit}
          onHide={() => {
            setIsShowModalAddEdit(false);
          }}
        />
      )}
    </>
  );
};

export default CalendarApp;
