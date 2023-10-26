module.exports = {
    posts: [
        { id: 1, title: "Lorem Ipsum", views: 254, user_id: 123 },
        { id: 2, title: "Sic Dolor amet", views: 65, user_id: 456 },
        { id: 3, title: "Dic dag dac", views: 66, user_id: 434 },
        { id: 4, title: "Dic daer sag vac", views: 67, user_id: 435 },
    ],
    users: [
        { id: 123, name: "John Doe" },
        { id: 456, name: "Jane Doe" },
        { id: 434, name: "Jack Coul" },
        { id: 435, name: "Anz Dev" }
    ],
    comments: [
        { id: 987, post_id: 1, body: "Consectetur adipiscing elit", date: new Date('2017-07-03') },
        { id: 995, post_id: 1, body: "Nam molestie pellentesque dui", date: new Date('2017-08-17') }
    ]
};