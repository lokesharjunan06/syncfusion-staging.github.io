var resourceData = [
    {
        Id: 1,
        Subject: 'Nancy',
        StartTime: new Date(2018, 3, 1, 10, 0),
        EndTime: new Date(2018, 3, 1, 12, 30),
        IsAllDay: false,
        HallId: 1,
        RoomId: 1,
        OwnerId: 1
    }, {
        Id: 2,
        Subject: 'Michael',
        StartTime: new Date(2018, 3, 1, 10, 0),
        EndTime: new Date(2018, 3, 1, 12, 30),
        IsAllDay: false,
        HallId: 1,
        RoomId: 1,
        OwnerId: 3
    }, {
        Id: 3,
        Subject: 'Steven',
        StartTime: new Date(2018, 3, 1, 10, 0),
        EndTime: new Date(2018, 3, 1, 12, 30),
        IsAllDay: false,
        HallId: 1,
        RoomId: 2,
        OwnerId: 2
    }, {
        Id: 4,
        Subject: 'Meeting',
        StartTime: new Date(2018, 3, 4, 14, 0),
        EndTime: new Date(2018, 3, 4, 15, 30),
        IsAllDay: false,
        HallId: 1,
        RoomId: 1,
        OwnerId: 1
    }, {
        Id: 5,
        Subject: 'Conference',
        StartTime: new Date(2018, 3, 3, 8, 0),
        EndTime: new Date(2018, 3, 3, 9, 30),
        IsAllDay: false,
        HallId: 1,
        RoomId: 1,
        OwnerId: 3
    }, {
        Id: 6,
        Subject: 'Break Time',
        StartTime: new Date(2018, 3, 5, 13, 0),
        EndTime: new Date(2018, 3, 5, 14, 0),
        IsAllDay: false,
        HallId: 1,
        RoomId: 2,
        OwnerId: 2
    }, {
        Id: 7,
        Subject: 'Holiday',
        StartTime: new Date(2018, 3, 5),
        EndTime: new Date(2018, 3, 7),
        IsAllDay: true,
        HallId: 1,
        RoomId: 1,
        OwnerId: 1
    }, {
        Id: 8,
        Subject: 'Sick Leave',
        StartTime: new Date(2018, 3, 5),
        EndTime: new Date(2018, 3, 6),
        IsAllDay: true,
        HallId: 1,
        RoomId: 1,
        OwnerId: 3
    }, {
        Id: 9,
        Subject: 'Weekend',
        StartTime: new Date(2018, 3, 7),
        EndTime: new Date(2018, 3, 9),
        IsAllDay: true,
        HallId: 1,
        RoomId: 2,
        OwnerId: 2
    }
];

var scheduleOptions = {
    width: '100%',
    height: '600px',
    selectedDate: new Date(2018, 3, 1),
    currentView: 'Week',
    views: [
        { option: 'Day' },
        { option: 'Week' },
        { option: 'WorkWeek' },
        { option: 'Month' },
        { option: 'Agenda' },
        { option: 'MonthAgenda' },
        { option: 'TimelineDay' },
        { option: 'TimelineWeek' },
        { option: 'TimelineWorkWeek' },
        { option: 'TimelineMonth' },
        { option: 'Year' },
        { option: 'TimelineYear', displayName: 'Horizontal Timeline Year' },
        { option: 'TimelineYear', displayName: 'Vertical Timeline Year', orientation: 'Vertical' }
    ],
    group: { resources: ['Conferences'] },
    resources: [{
        field: 'HallId', title: 'Attendees', name: 'Conferences', allowMultiple: true,
        dataSource: [
            { Text: 'Margaret', Designation: 'Sales Representative', Id: 1, Color: '#1aaa55' },
            { Text: 'Robert', Designation: 'Vice President, Sales', Id: 2, Color: '#357cd2' }
        ],
        textField: 'Text', idField: 'Id', colorField: 'Color'
    }],
    eventSettings: { dataSource: resourceData }
};
var scheduleObj = new ej.schedule.Schedule(scheduleOptions, document.getElementById('schedule'));

document.getElementById('isGrouping').onchange = function (e) {
    scheduleObj.group.resources = e.target.checked ? ['Conferences'] : [];
};

document.getElementById('enableRtl').onchange = function (e) {
    scheduleObj.enableRtl = e.target.checked;
};