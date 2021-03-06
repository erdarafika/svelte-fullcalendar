const calendarOptions = [
	'allDayDefault',
	'allDayHtml',
	'allDayMaintainDuration',
	'allDaySlot',
	'allDayText',
	'aspectRatio',
	'bootstrapFontAwesome',
	'businessHours',
	'buttonIcons',
	'buttonText',
	'cmdFormatter',
	'columnHeader',
	'columnHeaderFormat',
	'columnHeaderHtml',
	'columnHeaderText',
	'contentHeight',
	'customButtons',
	'dateAlignment',
	'dateIncrement',
	'dayCount',
	'dayPopoverFormat',
	'defaultAllDayEventDuration',
	'defaultDate',
	'defaultRangeSeparator',
	'defaultTimedEventDuration',
	'defaultView',
	'dir',
	'displayEventEnd',
	'displayEventTime',
	'dragRevertDuration',
	'dragScroll',
	'dropAccept',
	'droppable',
	'duration',
	'editable',
	'endParam',
	'eventAllow',
	'eventBackgroundColor',
	'eventBorderColor',
	'eventClassName',
	'eventClassNames',
	'eventColor',
	'eventConstraint',
	'eventDataTransform',
	'eventDragMinDistance',
	'eventDurationEditable',
	'eventLimit',
	'eventLimitClick',
	'eventLimitText',
	'eventLongPressDelay',
	'eventOrder',
	'eventOverlap',
	'eventResizableFromStart',
	'events',
	'eventSourceFailure',
	'eventSources',
	'eventSourceSuccess',
	'eventStartEditable',
	'eventTextColor',
	'eventTimeFormat',
	'firstDay',
	'fixedWeekCount',
	'footer',
	'forceEventDuration',
	'googleCalendarApiKey',
	'handleWindowResize',
	'header',
	'height',
	'hiddenDays',
	'lazyFetching',
	'listDayAltFormat',
	'listDayFormat',
	'locale',
	'locales',
	'longPressDelay',
	'maxTime',
	'minTime',
	'navLinkDayClick',
	'navLinks',
	'navLinkWeekClick',
	'nextDayThreshold',
	'noEventsMessage',
	'now',
	'nowIndicator',
	'plugins',
	'progressiveEventRendering',
	'rerenderDelay',
	'schedulerLicenseKey',
	'scrollTime',
	'selectable',
	'selectAllow',
	'selectConstraint',
	'selectLongPressDelay',
	'selectMinDistance',
	'selectMirror',
	'selectOverlap',
	'showNonCurrentDates',
	'slotDuration',
	'slotEventOverlap',
	'slotLabelFormat',
	'slotLabelInterval',
	'snapDuration',
	'startParam',
	'themeSystem',
	'timeGridEventMinHeight',
	'timeZone',
	'timeZoneParam',
	'titleFormat',
	'titleRangeSeparator',
	'unselectAuto',
	'unselectCancel',
	'validRange',
	'views',
	'visibleRange',
	'weekends',
	'weekLabel',
	'weekNumberCalculation',
	'weekNumbers',
	'weekNumbersWithinDays',
	'windowResizeDelay',
];

export const getCalendarProps = (props) => {
	const calendarProps = {};

	for (const propName in props) {
		if (calendarOptions.includes(propName)) {
			calendarProps[propName] = props[propName];
		}
	}

	return calendarProps;
};

export const filterNullProps = (obj) => {
	let result = {};

	for (const key in obj) {
		if (obj[key] !== null && obj[key] !== undefined) result[key] = obj[key];
	}

	return result;
};
