import React from 'react';
import image from "../../assets/Circle.svg";
import NotificationsItem from './NotificationsItem';

const NotificationList = () => {
    const notificationsByDay = {
        Today: [
            { icon: image, title: "New Category Course..!", description: "New design courses is available" },
            { icon: image, title: "React Tutorial", description: "New React course released" }
        ],
        Yesterday: [
            { icon: image, title: "Python Course", description: "Python basics added" },
            { icon: image, title: "Design Update", description: "UI updates completed" }
        ]
    };

    return (
        <div className='bg-[#D9D9DB] min-h-screen space-y-2'>
            {Object.entries(notificationsByDay).map(([day, notifications]) => (
                <div key={day} className="mb-6 pl-4">
                    <h2 className="font-bold text-base mb-2">{day}</h2>
                    {notifications.map((r, index) => (
                        <NotificationsItem
                            key={index}
                            icon={r.icon}
                            title={r.title}
                            description={r.description}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default NotificationList;
